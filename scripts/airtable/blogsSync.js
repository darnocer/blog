const { getAllContentFrontMatter, getTagsFromExampleRecord } = require('./utils')
const { syncRecords } = require('./syncRecords')

const tableName = 'Blogs'
const contentDirectory = 'blog'

async function syncBlog() {
  const records = getAllContentFrontMatter(contentDirectory)
  const airtableTags = await getTagsFromExampleRecord(tableName)

  await syncRecords(records, tableName, airtableTags)
}

syncBlog()
