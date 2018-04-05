<template>
  <div class="container">
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<style lang="scss">
@import '../assets/stylesheets/vars.scss';
@import '../assets/stylesheets/helpers.scss';

  body {
    background: #3D4452;
    color: $gray;
    max-width: 900px;
    margin: 0 auto;
    font-family: -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 16px;
    line-height: 1.65;

    *:focus {
      outline: none;
    }

    img {
      display: block;
      width: 100%;
    }
  }

</style>
