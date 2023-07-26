# ⚠️ Under Construction

![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ⚙️ Setup

```bash
npm install
npm run dev
```

- Open http://localhost:3000 in browser to view.

## 🎨 Customization

### Update content/data

- `data/siteMetadata.js` - site information
- `data/authors/default.md` - about me info
- `data/headerNavLinks.js` - nav links
- `data/chips.js` - interest chips

### Add Custom Components

To add new components:

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

To use in MDX:

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

### Retrieving Posts

Functions defined in `@lib/mdx`

```js
import { getAllFilesWithType, getAllFilesFrontMatter } from '@/lib/mdx'
```

**1. Use `getAllFilesFrontMatter()`**

Specify the `folder` from the `/data` directory

```js
export async function getStaticProps() {
  const posts = await getAllFilesWithType('blog')

  return { props: { posts } }
}
```

**2. Use `getAllFilesWithType()`**

Specify the `type` from YAML Frontmatter (eg. `type: blog`)

```js
export async function getStaticProps() {
  const posts = await getAllFilesWithType('blog')

  return { props: { posts } }
}
```

## ✅ Todo

## ⭐️ Credits

I used [this AMAZING template](https://github.com/timlrx/tailwind-nextjs-starter-blog) by timlrx as a starter and am adding customizations along the way.

Also shout out to the [Indie Web](https://indieweb.org/). Let's make the internet great again.

## ✉️ Contact

Get in touch with me at [darian@darian.digital](mailto:darian@darian.digital).
