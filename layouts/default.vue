<template lang="html">
  <div class="container">
    <Header></Header>
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Header from '~/components/header.vue'

export default {
  components: {
    Header
  }
}
</script>
