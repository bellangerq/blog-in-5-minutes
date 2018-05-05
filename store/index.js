import Vuex from 'vuex'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

const createStore = () => {
  return new Vuex.Store({
    state: {
      header: {}
    },
    mutations: {
      SET_HEADER: (state, header) => {
        state.header = header
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
          })
        ]).then(([title, links]) => {
          commit('SET_HEADER', {
            title,
            links
          })
        }).catch(console.error)
      }
    }
  })
}

export default createStore
