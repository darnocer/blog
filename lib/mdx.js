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
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'

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

// getMdxContent - Returns: An object containing the processed MDX source, a table of contents, and frontmatter (metadata) of the file. Intended for (content, blog, [slug]) - UPDATE to include /content/blog by default

export async function getMdxContent(basePath, type, slug) {
  const contentPath = path.join(root, basePath === 'content' ? 'content' : 'data')
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
        remarkSqueezeParagraphs,
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

// getSectionContent - Returns: An object containing the processed MDX source, a table of contents, and frontmatter (metadata) of the file specifically for section content not blog posts (located in /content/blog)

export async function getSectionContent(slug) {
  // Set default values for basePath and directory
  const basePath = 'data'
  const directory = 'content'

  // Adjusted contentPath construction to use the default basePath and directory
  const contentPath = path.join(root, basePath, directory)
  const mdxPath = path.join(contentPath, `${slug}.mdx`)
  const mdPath = path.join(contentPath, `${slug}.md`)

  // Check if .mdx or .md file exists and read the content
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  // Environment setup for esbuild, adjusted to not depend on platform-specific paths
  process.env.ESBUILD_BINARY_PATH = path.join(
    root,
    'node_modules',
    'esbuild',
    process.platform === 'win32' ? 'esbuild.exe' : 'bin',
    'esbuild'
  )

  let toc = []
  const { code, frontmatter } = await bundleMDX({
    source,
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

  // Return object structure remains the same
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

//getFiles - Retrieves a list of files in the /content/blog directory and any subdirectories by default. Optionally specify a subdirectory to return only those files in the specified subdirectory.
export function getFiles(subdirectory = '') {
  const basePath = path.join(root, 'content', 'blog')
  const searchPath = subdirectory ? path.join(basePath, subdirectory) : basePath
  const files = getAllFilesRecursively(searchPath)

  // Assuming getAllFilesRecursively returns absolute paths
  return files.map((file) => {
    const relativePath = path.relative(searchPath, file) // Convert to relative path
    return relativePath.replace(/\\/g, '/') // Normalize path separators for Windows
  })
}

//getAllFilesFrontMatter - Returns: An array of frontmatter objects from all files inside /content/blog/ and any subdirctories by default. Optionally specify a subdirectory to return only those files in the specified subdirectory.

// NOTE - this function is also defined in /scripts/airtableSync to avoid CommonJS/ES6 incompatibility with importing dependencies. Consider upating airtableSync.js with any updates to this file.

export async function getAllFilesFrontMatter(subdirectory = '') {
  const basePath = path.join(root, 'content', 'blog')
  const searchPath = subdirectory ? path.join(basePath, subdirectory) : basePath
  const files = getAllFilesRecursively(searchPath)
  let allFrontMatter = []

  files.forEach((file) => {
    const fileName = file.slice(searchPath.length + 1).replace(/\\/g, '/')
    if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: fileName.replace(/(\.mdx|\.md)$/, ''), // Removing file extension for slug
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
}
