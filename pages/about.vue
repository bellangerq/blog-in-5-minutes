<template lang="html">
  <div>
    <Header :title="title" :links="links"></Header>
    <section>
      <article>
        <img src="" alt="">
        <div class="content">
          <p>Hello world:)</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Header from '~/components/header.vue'

const client = createClient()

export default {
  asyncData ({env, params}) {
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
        links: links.items,
      }
    }).catch(console.error)
  },
  components: {
    Header
  }
}
</script>
