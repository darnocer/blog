import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'
import getAllFilesRecursively from './utils/files'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import remarkExtractFrontmatter from './mdx/remark-extract-frontmatter'
import remarkTocHeadings from './mdx/remark-toc-headings'
import remarkCodeTitles from './mdx/remark-code-title'
import remarkImgToJsx from './mdx/remark-img-to-jsx'
import remarkImageSyntax from './mdx/remark-image-syntax'
import remarkHideComments from './mdx/remark-hide-comments'
import remarkCallouts from './mdx/remark-callouts'

// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

import pathData from '@/data/pathData'
//pathData.root contains the 'root' folder where subdirectories for each content type live

const root = process.cwd()

//formatSlug - Remove file extensions from a slug (filename)
export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

// getMdxContent - Returns: An object containing the processed MDX source, a table of contents, and frontmatter (metadata) of the file.
export async function getMdxContent(basePath, type, slug) {
  const contentPath = path.join(root, basePath === 'content' ? 'content' : 'data')
  // const contentPath = contentType === 'content' ? pathData.contentRoot : pathData.dataRoot;
  const mdxPath = path.join(contentPath, type, `${slug}.mdx`)
  const mdPath = path.join(contentPath, type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  let toc = []
  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'components'),
    xdmOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkHideComments,
        remarkCallouts,
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        remarkImgToJsx,
        // remarkImageSyntax,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  })

  return {
    mdxSource: code,
    toc,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  }
}

//getFiles - Retrieve the list of all files within a given directory (specified by type) inside the /content folder. Returns array of strings, where each string is a path to a file.
export function getFiles(type) {
  const prefixPaths = path.join(root, pathData.root, type)
  const files = getAllFilesRecursively(prefixPaths)
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

//getAllFilesFrontMatter - Returns: An array of frontmatter objects from files inside a specified subfolder in /content, sorted by date in descending order.

// NOTE - this function is also defined in /scripts/airtableSync to avoid CommonJS/ES6 incompatibility with importing dependencies. Consider upating airtableSync.js with any updates to this file.

export async function getAllFilesFrontMatter(types) {
  let allFrontMatter = []
  types = Array.isArray(types) ? types : [types]

  for (const type of types) {
    const prefixPaths = path.join(root, pathData.root, type)
    const files = getAllFilesRecursively(prefixPaths)

    files.forEach((file) => {
      const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
      if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
        return
      }
      const source = fs.readFileSync(file, 'utf8')
      const { data: frontmatter } = matter(source)
      if (frontmatter.draft !== true) {
        allFrontMatter.push({
          ...frontmatter,
          slug: formatSlug(fileName),
          type: type, // Use the 'type' as the directory name
          date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
        })
      }
    })
  }

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}
