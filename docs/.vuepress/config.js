module.exports = {
  lang: 'en-US',
  title: 'Overlays Capture Architecture',
  description: 'Official OCA resources',

  themeConfig: {
    repo: 'the-human-colossus-foundation/oca-spec',
    repoLabel: 'Source',
    docsRepo: 'the-human-colossus-foundation/oca-spec',
    lastUpdated: true,
    logo: 'images/oca-logo.png',
    logoDark: 'images/oca-logo-white.png',
    navbar: [
      // NavbarItem
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Tools',
        children: [
          {
            text: "OCA Repository",
            link: '/tools/oca-repository.md'
          },
          {
            text: 'OCA Editor',
            link: '/tools/oca-editor.md'
          },
          {
            text: 'OCA Forms',
            link: '/tools/oca-forms.md'
          }
        ],
      },
      {
        text: 'References',
        children: [
          {
            text: 'Credential Layout',
            link: '/credential.md'
          },
          {
            text: 'Presentation Layout',
            link: '/presentation.md'
          }
        ]
      },
      {
        text: 'Learn more',
        children: [
          {
            text: "Use cases",
            link: '/use-cases.md',
          },
        ]
      },
      {
        text: 'v0.9.0',
        link: '/v0.9.0',
      },
    ],
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}
