import { visit } from 'unist-util-visit'
import { u } from 'unist-builder'

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node, index, parent) => {
      const children = node.children || []
      const firstChild = children[0]
      let calloutType = ''
      let title = ''
      let text = ''

      if (
        firstChild &&
        firstChild.type === 'paragraph' &&
        firstChild.children &&
        firstChild.children[0] &&
        firstChild.children[0].type === 'text'
      ) {
        // Extract callout type and title from the first child
        const firstLineText = firstChild.children[0].value
        const match = firstLineText.match(/^\[!(.*?)\]\s*(.*)/)
        if (match) {
          calloutType = match[1].trim()
          title = match[2].trim()
        }

        // Remove the first child since we've processed it
        children.shift()
      }

      if (children.length > 0) {
        // If there are more lines, join them to form the text content
        text = children
          .map((child) => {
            return child.children.map((c) => c.value).join('')
          })
          .join('\n')
      }

      // Replace the blockquote with our Callout component
      const calloutComponent = {
        type: 'mdxJsxFlowElement',
        name: 'Callout',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'type', value: calloutType },
          title && { type: 'mdxJsxAttribute', name: 'title', value: title },
          text && { type: 'mdxJsxAttribute', name: 'text', value: text },
        ].filter(Boolean),
        children: [],
      }

      parent.children.splice(index, 1, calloutComponent)
    })
  }
}
