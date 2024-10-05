const pageContent = {
  home: {
    title: "Darian's Blog",
    topicHeading: 'Topics',
    tipsTagsHeading: 'Technical',
    blogTagsHeading: 'Not Technical',
    blogHeading: null,
    tipHeading: 'Recent Posts',
  },
  newsletter: {
    heading: 'Subscribe',
    description: 'Get extremely infrequent updates about new posts',
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
