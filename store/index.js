import Vuex from 'vuex'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

const createStore = () => {
  return new Vuex.Store({
    state: {
      header: {},
      routes: []
    },
    mutations: {
      SET_HEADER: (state, header) => {
        state.header = header
      },
      SET_ROUTES: (state, routes) => {
        state.routes = routes
      }
    },
    actions: {
      nuxtServerInit ({ commit }) {
        return Promise.all([
          client.getEntries({
            'content_type': process.env.CTF_TITLE_ID
          }),
          client.getEntries({
            'content_type': process.env.CTF_NAVIGATION_ID,
            order: 'fields.order'
          }),
          client.getEntries({
            'content_type': process.env.CTF_BLOG_POST_TYPE_ID
          })
        ]).then(([title, links, posts]) => {
          commit('SET_HEADER', {
            title,
            links
          })

          // Retrieve each post slug
          const postsRoutes = []
          posts.items.forEach(post => {
            postsRoutes.push(post.fields.slug)
          })

          commit('SET_ROUTES', postsRoutes)
        }).catch(console.error)
      }
    }
  })
}

export default createStore
