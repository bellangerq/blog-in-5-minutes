<template>
  <header>
    <nuxt-link to="/" class="title" :title="header.title.items[0].fields.title">{{ header.title.items[0].fields.text }}</nuxt-link>
    <div class="navigation-container">
      <button type="button" id="toggleNav" @click="toggleNav">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
      </button>
      <nav class="closed">
        <nuxt-link
          v-for="link in header.links.items"
          :to="link.fields.url || '/'"
          :title="link.fields.title"
          :target="link.fields.target ? '_blank' : ''"
          :rel="link.fields.target ? 'noopener' : ''"
          :key="link.fields.url"
        >
          {{ link.fields.text }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getHeader'
    ]),
    toggleNav () {
      const nav = document.querySelector('nav')
      nav.classList.toggle('closed')
    }
  },
  computed: {
    ...mapState([
      'header'
    ]),
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';

header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 20px;

  .title {
    color: $color-black;
    font-size: 20px;
    text-decoration: none;

    &::after {
      background-color: $color-main;
      border-radius: 50%;
      content: '';
      display: inline-block;
      height: 5px;
      margin-left: 5px;
      width: 5px;
    }
  }

  .navigation-container {
    align-items: center;
    display: flex;
    position: relative;
    z-index: 1;

    button {
      background: none;
      border: none;
      color: $color-black;
      padding: 0;

      svg {
        transition: all 0.3s;
      }
    }

    nav {
      background: $color-white;
      border-radius: 4px;
      box-shadow: 0px 2px 2px 0px rgba($color-black, 0.14);
      padding: 10px;
      position: absolute;
      right: 0;
      top: 30px;
      width: 150px;

      a {
        border-radius: 4px;
        color: $color-black;
        display: block;
        font-size: 14px;
        padding: 5px 10px;
        text-decoration: none;
        transition: background 0.3s ease;

        &:hover, &:focus {
          background: $color-white-darker;
        }
      }

      &.closed {
        display: none;
      }
    }
  }
}
</style>
