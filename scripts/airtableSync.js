const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const Airtable = require('airtable')
require('dotenv').config()

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

// Initialize Airtable base
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID)
const tableName = 'Tips'

async function syncAirtable() {
  const records = getAllContentFrontMatter('tips')

  // Fetch existing tags from Airtable
  async function getTagsFromExampleRecord() {
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

  const airtableTags = await getTagsFromExampleRecord()

  for (const record of records) {
    // Prepare record data for Airtable, skipping tags not in Airtable
    const recordTags = record.tags?.filter((tag) => airtableTags.includes(tag)) || []
    const recordData = {
      Name: record.slug,
      Summary: record.summary || '',
      Title: record.title || '',
      Date: formatDate(record.date),
      Tags: recordTags,
      Draft: record.draft,
      Type: record.type ? record.type[0] : '',
      Layout: record.layout ? record.layout[0] : 'PostSimple',
      Category: record.category ? record.category[0] : 'default',
    }

    try {
      // Check if the record already exists in Airtable
      const existingRecords = await base(tableName)
        .select({ filterByFormula: `{Name} = '${record.slug}'` })
        .firstPage()

      if (existingRecords.length > 0) {
        // Update the existing record
        const existingRecord = existingRecords[0]
        await base(tableName).update(existingRecord.id, recordData)
        console.log(`Updated record: ${record.slug}`)
      } else {
        // Create a new record
        await base(tableName).create(recordData)
        console.log(`Created record: ${record.slug}`)
      }

      // Check if any tags were skipped and print a message
      if (record.tags?.length > recordTags.length) {
        const skippedTags = record.tags.filter((tag) => !recordTags.includes(tag))
        console.log(
          `Skipped tags for record "${record.slug}" because they do not exist in Airtable:`,
          skippedTags
        )
      }
    } catch (error) {
      console.error(`Error syncing record ${record.slug}:`, error)
    }
  }
}

syncAirtable()
