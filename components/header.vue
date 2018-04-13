<template>
  <header>
    <a href="/" title="Sentences 💬">Sentences <span>💬</span></a>
    <div class="navigation-container">
      <button type="button" id="toggleNav" data-nav="closed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
      </button>
      <nav>
        <a href="/" title="Sentences 💬">Home</a>
        <a href="/about" title="About this project">About</a>
        <a href="https://twitter.com/bellanger_q" title="Get news on Twitter" target="_blank">Twitter</a>
        <a href="https://github.com/bellangerq" title="See source code on GitHub" target="_blank">GitHub</a>
      </nav>
    </div>
  </header>
</template>

<script>
if (process.browser) {
  // Toggle nav
  const navButton = document.querySelector('#toggleNav')
  const nav = document.querySelector('nav')
  navButton.addEventListener('click', () => {
    navButton.setAttribute('data-nav', navButton.getAttribute('data-nav') === 'closed' ? 'open' : 'closed')
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block'
  })

  // Hide nav on ESC key
  document.addEventListener('keyup', (event) => {
    if (event.keyCode === 27 && nav.style.display === 'block') {
      navButton.setAttribute('data-nav', 'closed')
      nav.style.display = 'none'
    }
  })
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

  a {
    color: $color-main;
    font-size: 20px;
    text-decoration: none;

    span {
      opacity: 0;
      transition: opacity .3s ease;
    }

    &:hover span, &:focus span {
      opacity: 1;
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
      color: $color-main;
      padding: 0;

      &:hover {
        cursor: pointer;
      }

      svg {
        transition: all 0.3s;
      }
    }

    nav {
      background: $color-white;
      border-radius: 4px;
      box-shadow: 0px 2px 2px 0px rgba($color-black, 0.14);
      display: none;
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
          background: $color-gray;
        }
      }
    }
  }
}
</style>
