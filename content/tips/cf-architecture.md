---
title: Quick Client-First Reference
summary:
date: 2023-10-29
aliases:
tags:
  - webflow
draft: true
type:
  - tip
layout:
  - PostSimple
category:
  - webflow
---

<Callout text="Webflow page structure when using <a href='https://finsweet.com/client-first/docs/intro' target='_blank'>Client First Architecture</a>" />

`body`
`page-wrapper` %% wraps all page content %%
<span style="display: inline-flex; align-items: center; vertical-align: middle;"><svg data-icon="SymbolOutline12" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 12 12" class="bem-Svg" style="display: block; transform: translate(0px, 0px);"><g clip-path="url(#clip0_401_107973)"><path clip-rule="evenodd" d="M5.817.792a.477.477 0 01.394.001l4.76 2.178a.477.477 0 01.273.507l.001.026v5.459a.477.477 0 01-.266.428l-4.725 2.332a.475.475 0 01-.252.072H6a.48.48 0 01-.21-.048l-4.77-2.31a.477.477 0 01-.27-.43V3.474c0-.017 0-.033.003-.05a.479.479 0 01.279-.484L5.817.792zM1.705 4.217v4.49l3.822 1.852.008-4.594-3.83-1.748zm4.784 1.746l-.008 4.584 3.81-1.881V4.243l-3.802 1.72zm3.131-2.56L6.01 1.75 2.385 3.38l3.628 1.655L9.62 3.403z" fill="#30A185"></path></g></svg>&nbsp;</span> `navigation` %% navigation component - within page wrapper, outside of main wrapper%%
`main-wrapper` %% wraps all page content %%
`section_[identifier]` %% name your section with an identifier %%
`padding-global` %% adds global horizontal page padding %%
`container-[size]` %% sets a max-width for the section content %%
`section-padding-[size]` %% add vertical section padding %%
`[identifier]_component` %% your actual component content %%
`[identifier]_[element-name]` %% elements named with BEM %%
`...` %% the rest of your component %%
`section_[identifier]` %% additional sections %%
`section_[identifier]` %% additional sections %%
<span style="display: inline-flex; align-items: center; vertical-align: middle;"><svg data-icon="SymbolOutline12" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 12 12" class="bem-Svg" style="display: block; transform: translate(0px, 0px);"><g clip-path="url(#clip0_401_107973)"><path clip-rule="evenodd" d="M5.817.792a.477.477 0 01.394.001l4.76 2.178a.477.477 0 01.273.507l.001.026v5.459a.477.477 0 01-.266.428l-4.725 2.332a.475.475 0 01-.252.072H6a.48.48 0 01-.21-.048l-4.77-2.31a.477.477 0 01-.27-.43V3.474c0-.017 0-.033.003-.05a.479.479 0 01.279-.484L5.817.792zM1.705 4.217v4.49l3.822 1.852.008-4.594-3.83-1.748zm4.784 1.746l-.008 4.584 3.81-1.881V4.243l-3.802 1.72zm3.131-2.56L6.01 1.75 2.385 3.38l3.628 1.655L9.62 3.403z" fill="#30A185"></path></g></svg>&nbsp;</span> `footer` %% navigation component %%
