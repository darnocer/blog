const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const base = require('./baseInit')

// DEFINE FUNCTIONS - Function code is incorporated directly in this script instead importing dependencies due to hassle of CommonJS / ES6 syntax incompatibility.

// getAllFilesRecursively() = /lib/utils/files.js
function getAllFilesRecursively(folder) {
  let files = []
  const folderContents = fs.readdirSync(folder)
  folderContents.forEach((item) => {
    const fullPath = path.join(folder, item)
    if (fs.statSync(fullPath).isDirectory()) {
      files = [...files, ...getAllFilesRecursively(fullPath)]
    } else {
      files.push(fullPath)
    }
  })
  return files
}

// formatDate = /lib/utils/formatDate.js
const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString('en-US', options)

  return now
}

// getAllContentFrontMatter() is similar to getAllFilesFrontMatter() in /lib/mdx.js, however it returns frontmatter for ALL files regardless of draft status
function getAllContentFrontMatter(type) {
  const root = process.cwd()
  const prefixPaths = path.join(root, 'content', type)
  const files = getAllFilesRecursively(prefixPaths)

  const allContentFrontMatter = files
    .filter((file) => ['.mdx', '.md'].includes(path.extname(file)))
    .map((file) => {
      const fileName = file.slice(prefixPaths.length + 1)
      const source = fs.readFileSync(file, 'utf8')
      const { data: frontmatter } = matter(source)
      return {
        ...frontmatter,
        slug: fileName.replace(/\.(mdx|md)/, ''),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      }
    })
    .filter(Boolean)

  return allContentFrontMatter.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// lists ALL tags from file contents regardless of draft status - similar to getAllTags() in lib/utils/tags.js
async function getAllUniqueTags(type) {
  const allContent = getAllContentFrontMatter(type)
  const tagSet = new Set()

  allContent.forEach((content) => {
    if (content.tags) {
      content.tags.forEach((tag) => {
        tagSet.add(tag)
      })
    }
  })

  return Array.from(tagSet)
}

// example-record is maintained in Airtable and contains all tag values in order to retrieve all tag values from Airtable. This is used to compare to the tag values for the records and output missing tags that must be manually added to Airtable.
async function getTagsFromExampleRecord(tableName) {
  try {
    // Fetch the example record where tag values are maintained
    const records = await base(tableName)
      .select({
        maxRecords: 1,
        filterByFormula: `{Name} = 'example-record'`,
      })
      .firstPage()

    const exampleRecordTags = records[0]?.fields?.Tags || []
    return exampleRecordTags
  } catch (error) {
    console.error('Error fetching tags from the example record:', error)
    return []
  }
}

module.exports = {
  getAllFilesRecursively,
  formatDate,
  getAllContentFrontMatter,
  getAllUniqueTags,
  getTagsFromExampleRecord,
}
