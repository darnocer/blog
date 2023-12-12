const {
  getAllContentFrontMatter,
  getTagsFromExampleRecord,
  getCategoriesFromExampleRecord,
} = require('./utils')
const { syncRecords } = require('./syncRecords')

const tableName = 'Tips'
const contentDirectory = 'tips'

async function syncTips() {
  const records = getAllContentFrontMatter(contentDirectory)
  const airtableTags = await getTagsFromExampleRecord(tableName)
  const airtableCategories = await getCategoriesFromExampleRecord(tableName)

  await syncRecords(records, tableName, airtableTags, airtableCategories)
}

syncTips()
