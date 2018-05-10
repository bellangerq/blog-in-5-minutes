const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_TITLE_ID',
  'CTF_NAVIGATION_ID',
  'CTF_META_ID',
  'CTF_ABOUT_ID',
  'CTF_ERROR_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN'
])
const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

const config = {
  head: {
    title: 'Sentences 💬',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#3d4452' },

      // Facebook
      { hid: 'og:site_name', property: 'og:site_name', content: 'Sentences' },
      { hid: 'og:title', property: 'og:title', content: 'Sentences' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:url', property: 'og:url', content: 'https://sentences.surge.sh' },
      { hid: 'og:description', property: 'og:description', content: '' },

      // Twitter
      { hid: 'twitter:title', property: 'twitter:site', content: '@bellanger_q' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image', property: 'twitter:image', content: '' },
      { hid: 'twitter:widgets:theme', property: 'twitter:widgets:theme', content: 'dark' },
      { hid: 'twitter:widgets:link-color', property: 'twitter:widgets:link-color', content: '#3d4452' },
      { hid: 'twitter:widgets:border-color', property: 'twitter:widgets:border-color', content: '#3d4452' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Serif' }
    ]
  },

  css: [
    { src: '@/assets/stylesheets/vars.scss' },
    { src: '@/assets/stylesheets/typo.scss' },
    { src: '@/assets/stylesheets/helpers.scss' },
    { src: '@/assets/stylesheets/layout.scss' },
    { src: '@/assets/stylesheets/transition.scss' }
  ],

  loading: { color: '#3d4452' },

  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ]
  },

  plugins: [
    '~/plugins/contentful'
  ],

  router: {
    middleware: ['routeGuard']
  },

  generate: {
    routes () {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/${entry.fields.slug}`)
        ]
      })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID,
    CTF_TITLE_ID: ctfConfig.CTF_TITLE_ID,
    CTF_NAVIGATION_ID: ctfConfig.CTF_NAVIGATION_ID,
    CTF_META_ID: ctfConfig.CTF_META_ID,
    CTF_ABOUT_ID: ctfConfig.CTF_ABOUT_ID,
    CTF_ERROR_ID: ctfConfig.CTF_ERROR_ID
  }
}

module.exports = config
