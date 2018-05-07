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
  head () {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
        { hid: 'og:url', property: 'og:url', content: `${this.$store.state.domain}${this.$route.fullPath}` },
        { hid: 'og:description', property: 'og:description', content: this.post.fields.description },
        { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url }
      ]
    }
  },
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
