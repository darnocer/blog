const { formatDate } = require('./utils')
const base = require('./baseInit')

async function syncRecords(records, tableName, airtableTags) {
  for (const record of records) {
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
      const existingRecords = await base(tableName)
        .select({ filterByFormula: `{Name} = '${record.slug}'` })
        .firstPage()

      if (existingRecords.length > 0) {
        const existingRecord = existingRecords[0]
        await base(tableName).update(existingRecord.id, recordData)
        console.log(`Updated record: ${record.slug}`)
      } else {
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

module.exports = { syncRecords }
