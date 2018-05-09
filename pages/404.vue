<template lang="html">
  <div>
    <section>
      <article>
        <img class="cover" src="~/static/error-banner.png" alt="Error">
        <div class="content">
          <h1>{{ error.fields.title }}</h1>
          <hr>
          <p>{{ error.fields.description }}</p>
          <br>
          <nuxt-link to="/">{{ error.fields.backLink }}</nuxt-link>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  head () {
    return {
      title: this.error.fields.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.error.fields.title },
        { hid: 'og:url', property: 'og:url', content: `${this.$store.state.domain}${this.$route.fullPath}` },
        { hid: 'og:description', property: 'og:description', content: this.error.fields.description },
        { hid: 'og:image', property: 'og:image', content: this.error.fields.heroImage.fields.file.url }
      ]
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_ERROR_ID
    }).then(error => {
      return {
        error: error.items[0]
      }
    }).catch(console.error)
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

article {
  background: $color-white;
  border-radius: $radius;
  box-shadow: 0 2px 2px 0 rgba($color-black, 0.14);
  margin: 0 20px 20px;
}

.cover {
  border-radius: $radius $radius 0 0;
}

.content {
  background: $color-white;
  border-radius: 0 0 $radius $radius;
  padding: 20px;

  a {
    text-decoration: underline;

    &:hover,
    &:focus {
      color: $color-main-darker;
      text-decoration: none;
    }
  }
}
</style>
