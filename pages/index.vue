<template>
  <div>
    <section>
      <div class="cards">
        <div class="card" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import ArticlePreview from '~/components/article-preview.vue'

const client = createClient()

export default {
  asyncData ({env, params}) {
    return Promise.all([
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': env.CTF_META_ID,
      })
    ]).then(([posts, meta]) => {
      console.log(meta.items[0])
      return {
        posts: posts.items,
        meta: meta.items[0]
      }
    }).catch(console.error)
  },
  head () {
    return {
      title: this.meta.fields.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.meta.fields.title },
        { hid: 'og:url', property: 'og:url', content: `${this.$store.state.domain}${this.$route.fullPath}` },
        { hid: 'og:description', property: 'og:description', content: this.meta.fields.description },
        { hid: 'og:image', property: 'og:image', content: this.meta.fields.image.fields.file.url }
      ]
    }
  },
  components: {
    ArticlePreview
  }
}
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;

  .card {
    display: block;
    margin: 0 20px 20px;
    min-height: 350px;

    @media(min-width: 500px) {
      display: flex;
      margin: 0 20px 40px 20px;
      width: calc((100% / 2) - 40px);
    }
  }
}
</style>
