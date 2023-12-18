import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { InkeepSearchBar } from './components/InkeepSearchBar'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  search: {
    component: () => <InkeepSearchBar />
  }
}

export default config
