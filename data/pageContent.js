const pageContent = {
  home: {
    title: "D's Blog",
    postsHeading: 'Recent Posts',
  },
  newsletter: {
    heading: 'Receive updates from me',
    description: 'Subscribe for occasional emails about new posts',
    error: '',
    success: '',
    button: '',
  },
  tips: {
    title: 'Tips',
    description: 'Short efficiency tips and snippets for random stuff',
  },
  posts: {
    title: 'All Posts',
    description: null,
  },
  tags: {
    title: 'Tags',
    description: 'Blog topics',
  },
  tag: {
    description: (tag) => `Posts tagged with #${tag}`,
  },
  types: {
    title: 'Content Types',
    description: 'Types of content',
  },
  type: {
    description: (type) => `Posts with a content type of '${type}'`,
  },
}
module.exports = pageContent
