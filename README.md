# darian.blog

![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Live site:** https://darian.blog

## ⚙️ Setup

**Installation:**

```bash
npm install
npm run dev
```

- Open http://localhost:3000 in browser to view

---

## ℹ️ Overview

### Blog post content

- All posts live in `.mdx` files in `/content/blog`
- There are no subdirectories for post content. All slugs are added to the root url.
- `content_type` metadata appears as a `Badge` next to the post
- `tags` metadata appears as a link prefixed with `#`
- New tag and content type values can be added on the fly and dynamically generate archive pages at `/tags/*` and `/types/*`, respectively

### Styling

- Typography styles are configured in `tailwindconfig.js`
- Color palette is imported from `colors.js`
- Additional custom styling in `/css/tailwind.css`

### Other data

- `data/siteMetadata.js` - site information
- `data/authors/default.md` - about me info
- `data/headerNavLinks.js` - nav links
- `data/pageContent.js` - headers and other content

## 🎨 Customization

### Updating Fonts

1. Add font files to `public/static/fonts`
2. Add font declarations to `css/tailwind.css`:

```css
@font-face {
  font-family: Thiccboi;
  src: url('../public/static/fonts/THICCCBOI-Medium.woff2') format('opentype');
  font-weight: 500;
}
```

3. Add a declaration for each unique font weight
4. Update `fontFamily` in `tailwind.config.js`:

```json
theme: {
  ...
	extend: {
		...
		fontFamily: {
			sans: ['Thiccboi', ...defaultTheme.fontFamily.sans],
		},
		...
  }
  ...
}
```

## Add prose sections of content

To add a `prose` content section to a page:

1. Create an `.mdx` file in `/data/content` with the name of the page or section (eg. `home.mdx`)
2. Add the section content as markdown.

Section headings should have a bottom border. To add a heading with a bottom border, use the `<Heading/>` component:

```jsx
<Heading text="Darian's Blog" level="h1" />
```

3. Import `MDXLayoutRenderer` and `getSectionContent()` to the page where you want to display prose content

```jsx
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getSectionContent } from '@/lib/mdx'
```

4. Retrieve the file contents by inputting the filename located in `data/content/` as the argument:

```jsx
export async function getStaticProps() {
  const homeContent = await getSectionContent('home')

  return { props: { homeContent } }
}
```

5. Set the default layout as `ContentLayout`, extract `mdxSource` and `frontMatter`, and pass as props to `<MDXLayoutRenderer />

```jsx
export default function Home({ homeContent }) {
  const { mdxSource, frontMatter } = homeContent
  const DEFAULT_LAYOUT = 'ContentLayout'

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
```

Note: The returned content renders as `{children}` in `layouts/ContentLayout.js`. `ContentLayout` adds a `prose` class to the return content which applies typography defaults appropriate for posts.

### Adding New Components

**To add new components:**

1. Create `NewComponent.js` in `/components` directory
2. Create the react component:

```js
// import statements

export function NewComponent({ props }) => {
// ... functions
  }

  return (
//... jsx markup
  )
}

```

**To use in MDX:**

3. Add to `MDXComponents` object in `/components/MDXComponents`:

```js
import NewComponent from './NewComponent'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  NewComponent,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}
```

4. Use in `.mdx` file in the format:

```jsx
<Component prop="value" />
```

---

## 🛠️ Useful Components

### Callouts

Callouts in markdown can be utilized with the syntax:

```
> [!type] Callout text
```

`type` can be the following values which correspond to the following icons:

- `construction` --> construction
- `quote` --> quotation
- `tools` --> wrench
- `info` --> info
- `default` --> star

To add body text, simply add additional lines:

```
> [!type] Callout title
>
> This is body text
```

### SectionContainer

For any component that is intended to be a full width section, within the component file, wrap the return value in `<SectionContainer></SectionContainer>`.

`<SectionContainer>` takes two optional props: `padding` and `container`:

- `padding` - specifies the vertical padding of the section
- `container` - specifies the max-width of the container

Both props take the values `small`, `medium`, or `large`. If not specified, the default value `medium` will apply the following classes:

- `padding` = `py-5`
- `container` = `max-w-6xl`

## 📄 Retrieving Post Data

**`lib/mdx.js`**:

- `getMdxContent()` - Returns: An object containing the processed MDX source, a table of contents, and frontmatter (metadata) of the file.
- `getSectionContent()` - Returns: An object containing the processed MDX source, a table of contents, and frontmatter (metadata) of the file specifically for section content not blog posts
- `getFiles()` - Retrieves a list of files in the /content/blog directory and any subdirectories by default. Optionally specify a subdirectory to return only those files in the specified subdirectory.
- `getAllFilesFrontMatter()` - Returns: An array of frontmatter objects from all files inside /content/blog/ and any subdirctories by default. Optionally specify a subdirectory to return only those files in the specified subdirectory.

**`lib/getAllTags.js`**:

- `getAllTags()` - Returns: an array of formatted tags from all posts

**`lib/getAllTypes.js`**:

- `getAllTypes()` - Returns: an array of formatted content types from all posts

#### Retrieving post list

Use `getAllFilesFrontMatter()` to retrieve a list of posts and frontmatter to be passed as a prop to `<RecentPosts/>` or `<ListLayout/>` components.

```js
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter()

  return { props: { posts } }
}
```

```
<RecentPosts posts={posts} heading="Recent Posts" />
```

## ⭐️ Credits

I used [this AMAZING template](https://github.com/timlrx/tailwind-nextjs-starter-blog) by timlrx as a starter.

Also shout out to the [Indie Web](https://indieweb.org/). Let's make the internet great again 😏

## ✉️ Contact

Get in touch with me at [darian@darian.digital](mailto:darian@darian.digital).
