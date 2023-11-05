const { getAllContentFrontMatter, getTagsFromExampleRecord } = require('./utils')
const { syncRecords } = require('./syncRecords')

const tableName = 'Tips'
const contentDirectory = 'tips'

async function syncTips() {
  const records = getAllContentFrontMatter(contentDirectory)
  const airtableTags = await getTagsFromExampleRecord(tableName)

  await syncRecords(records, tableName, airtableTags)
}

syncTips()
