# darian.blog

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
	extend: {
		...
		fontFamily: {
			sans: ['Thiccboi', ...defaultTheme.fontFamily.sans],
		},
		...
},
```

## Custom Components

### Adding New Components

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

Specify the `folder(s)` from the `/data` directory to return all non-draft files from specified folders

```js
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
```

**2. Use `getAllFilesWithType()`**

Specify the `type(s)` from YAML Frontmatter (eg. `type: blog`) to return all files of the spcified type(s)

```js
export async function getStaticProps() {
  const posts = await getAllFilesWithType('blog')

  return { props: { posts } }
}
```

### Sections

For any component that is intended to be a full width section, within the component file, wrap the return value in `<SectionContainer></SectionContainer>`.

`<SectionContainer>` takes two optional props: `padding` and `container`:

- `padding` - specifies the vertical padding of the section
- `container` - specifies the max-width of the container

Both props take the values `small`, `medium`, or `large`. If not specified, the default value `medium` will apply the following classes:

- `padding` = `py-5`
- `container` = `max-w-6xl`

## ✅ Todo

- [ ] Update PostLayoutSimple to hide pipe and flex column on mobile
- [ ] Update date format on /blog
- [ ] Style Next/Previous on /blog

## ⭐️ Credits

I used [this AMAZING template](https://github.com/timlrx/tailwind-nextjs-starter-blog) by timlrx as a starter and am adding customizations along the way.

Also shout out to the [Indie Web](https://indieweb.org/). Let's make the internet great again.

## ✉️ Contact

Get in touch with me at [darian@darian.digital](mailto:darian@darian.digital).
