const Airtable = require('airtable')
require('dotenv').config()

// Initialize Airtable base
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID)

module.exports = base
