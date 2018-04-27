<template lang="html">
  <div>
    <Header :title="title" :links="links"></Header>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  asyncData ({ env }) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_TITLE_ID
      }),
      client.getEntries({
        'content_type': env.CTF_NAVIGATION_ID,
        order: '-sys.createdAt'
      })
    ]).then(([title, links]) => {
      return {
        title: title.items[0],
        links: links.items
      }
    }).catch(console.error)
  },
  components: {
    Header
  }
}
</script>
