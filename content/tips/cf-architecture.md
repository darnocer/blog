---
title: Client-First Quick Reference
summary: 
date: 2023-10-29
aliases: 
tags:
  - webflow
draft: false
type:
  - tip
layout:
  - PostSimple
category:
  - webflow
---

<Callout title="When this is useful" text="Quickly reference the structure for <a href='https://finsweet.com/client-first/docs/intro' target='_blank'>Client First Architecture</a> when building in Webflow." />

- `body`
	* `page-wrapper`  - wraps all page content 
		* <WebflowComponentIcon /> `navigation` - navigation component is added within page wrapper, outside of main wrapper
		- `main-wrapper` - wraps all page content 
			- `section_[identifier]` - name your section with an identifier 
				- `padding-global` - adds global horizontal page padding 
					- `container-[size]` - sets a max-width for the section content (small, medium, or large)
						- `section-padding-[size]` - add vertical section padding (small, medium, or large)
							- `[identifier]_component` - your actual component content 
								* `[identifier]_[element-name]` - elements named similar to BEM
									- `...` - the rest of your component elements
			- `section_[identifier]` (additional sections)
			- `section_[identifier]` (additional sections)
			- `...` - additional sections
		- <WebflowComponentIcon /> `footer` - footer component is added outside of main wrapper
