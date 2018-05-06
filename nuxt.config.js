const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_TITLE_ID',
  'CTF_NAVIGATION_ID',
  'CTF_ABOUT_ID',
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
      { hid: 'description', name: 'description', content: 'Custom app in under 5 minutes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.min.css' }
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
    CTF_ABOUT_ID: ctfConfig.CTF_ABOUT_ID
  }
}

module.exports = config
