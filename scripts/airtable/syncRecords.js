const { formatDate } = require('./utils')
const base = require('./baseInit')

async function syncRecords(records, tableName, airtableTags, airtableCategories) {
  for (const record of records) {
    const recordTags = record.tags?.filter((tag) => airtableTags.includes(tag)) || []
    const recordCategory =
      record.category?.filter((cat) => airtableCategories.includes(cat))[0] || 'default'

    const recordData = {
      Name: record.slug,
      Summary: record.summary || '',
      Title: record.title || '',
      Date: formatDate(record.date),
      Tags: recordTags,
      Draft: record.draft,
      Type: record.type ? record.type[0] : '',
      Layout: record.layout ? record.layout[0] : 'PostSimple',
      Category: recordCategory,
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

      if (record.category && record.category[0] !== recordCategory) {
        console.log(
          `Skipped category for record "${record.slug}" because it does not exist in Airtable:`,
          record.category[0]
        )
      }
    } catch (error) {
      console.error(`Error syncing record ${record.slug}:`, error)
    }
  }
}

module.exports = { syncRecords }
