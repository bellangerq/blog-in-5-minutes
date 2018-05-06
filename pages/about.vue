<template lang="html">
  <div>
    <section>
      <Article :post="post"></Article>
    </section>
  </div>
</template>

<script>
import Article from '~/components/article.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_ABOUT_ID
    }).then(post => {
      return {
        post: post.items[0]
      }
    }).catch(console.error)
  },
  components: {
    Article
  }
}
</script>
