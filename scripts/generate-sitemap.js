const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'pages/*.tsx',
    'content/blog/**/*.mdx',
    'content/blog/**/*.md',
    'content/tips/**/*.mdx',
    'content/tips/**/*.md',
    'public/tags/**/*.xml',
    '!pages/about.js',
    '!pages/_*.js',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.js', // Exclude specific files
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const source = fs.existsSync(page) && fs.readFileSync(page, 'utf8')
                const fm = source && matter(source)
                if (fm && fm.data.draft) return
                if (fm && fm.data.canonicalUrl) return
                const path = page
                  .replace('pages/', '/')
                  .replace('content/blog', '/blog')
                  .replace('content/tips', '/tips')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/feed.xml', '')
                const route = path === '/index' ? '' : path
                return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}</loc>
                        </url>
                    `
              })
              .filter(Boolean)
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
