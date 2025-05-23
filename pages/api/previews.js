import { getMdxPreviews } from '@/lib/mdx'

export default async function handler(req, res) {
  try {
    const previews = await getMdxPreviews()

    if (!previews || previews.length === 0) {
      console.log('No previews found.')
      return res.status(404).json({ error: 'No musings found' })
    }

    res.status(200).json(previews)
  } catch (error) {
    console.error('API Error:', error)
    res.status(500).json({ error: 'Failed to fetch musings' })
  }
}
