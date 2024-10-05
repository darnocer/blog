const siteMetadata = {
  title: "Darian's Blog",
  author: 'Darian',
  description: 'The inner machinitions of my mind are an enigma',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://darian.blog',
  siteRepo: 'https://github.com/darnocer/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  website: 'https://www.linkedin.com/in/darian-nocera',
  email: 'darian@madebyrvg.com',
  github: 'https://github.com/darnocer',
  twitter: null,
  facebook: null,
  youtube: null,
  linkedin: 'https://www.linkedin.com/in/darian-nocera',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-ME5JD5RWNR', // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    provider: 'convertkit',
  },
  comment: {
    provider: null,
  },
}

module.exports = siteMetadata
