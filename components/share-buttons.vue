<template lang="html">
  <div class="share-buttons">
    <a :href="tweetUrl" target="_blank" class="share-twitter">Tweet</a>
    <button @click="copyLink" class="share-copy">Copy link</button>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'url'
  ],
  data () {
    return {
      currentUrl: `${this.$store.state.domain}${this.$route.fullPath}`,
    }
  },
  computed: {
    tweetUrl () {
      return `https://twitter.com/intent/tweet?text=📖%20${this.title}:&url=${this.currentUrl}`
    }
  },
  methods: {
    copyLink () {
      // Create fake input to select text
      const body = document.querySelector('body')
      const tempInput = document.createElement("INPUT")
      body.appendChild(tempInput)
      tempInput.setAttribute('value', this.currentUrl)
      tempInput.select()
      document.execCommand('Copy')
      body.removeChild(tempInput)

      // Change button text
      const copyButton = document.querySelector('.share-buttons button')
      copyButton.innerHTML = 'Copied!'
      setTimeout(() => {
        copyButton.innerHTML = 'Copy link'
      }, 2000)

    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

.share-buttons {
  align-items: center;
  display: flex;
  justify-content: space-between;

  a,
  button {
    border: none;
    border-radius: $radius;
    color: $color-white;
    font-size: 1em;
    line-height: 1.4em;
    padding: 10px 0;
    text-align: center;
    text-decoration: none;
    width: calc(50% - 10px);

    &.share-twitter {
      background: $color-twitter;

      &:hover,
      &:focus {
        background: $color-twitter-darker;
      }
    }
    &.share-copy {
      background: $color-main;

      &:hover,
      &:focus {
        background: $color-main-darker;
      }
    }

    &:hover,
    &:focus {
      color: $color-white;
    }
  }
}
</style>
