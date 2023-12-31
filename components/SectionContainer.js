import React from 'react'

const SectionContainer = ({ padding, container, children }) => {
  const paddingClassNames = {
    small: 'py-3',
    medium: 'py-5',
    large: 'py-7',
  }
  const containerClassNames = {
    small: 'max-w-3xl',
    medium: 'max-w-4xl',
    large: 'max-w-5xl',
  }

  const sectionClasses = `${padding ? paddingClassNames[padding] : paddingClassNames.medium}`
  const containerClasses = `m-auto w-full ${
    container ? containerClassNames[container] : containerClassNames.medium
  }`

  return (
    <section className={sectionClasses}>
      <div className="px-5">
        <div className={containerClasses}>{children}</div>
      </div>
    </section>
  )
}

export default SectionContainer
