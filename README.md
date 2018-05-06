# Sentences 💬

This is a simple web application I made to showcase short stories.

## To do
- [x] Import content in store, not directly in pages
- [x] Close menu on page load (middleware)
- [x] Create and design `/about` page
- [x] Add page transitions
- [x] Create share buttons component
- [x] Show error on undefined post's slug
- [x] Customize error page
- [ ] Define meta tags
- [ ] Make it PWA'ish

## Tools

It's built with [Nuxt.js](https://nuxtjs.org) and the content is pulled from [Contentful](https://contentful.com). It is deployed online as a static website thanks to [Surge.sh](https://surge.sh).

The idea of this is to create a website with a fully customizable content without using a traditional CMS. And also to force me to write sometimes...

## Development

Launch local server:
```shell
npm run dev
```

Generate static files:
```shell
npm run generate
```

Deploy on Surge:
```shell
npm run deploy
```

## Contentful

### Add a new content type

Once its created on the Contentful dashboard:

- Add an entry in `.contentful.json`:
```json
  {
    "CTF_NEW_CONTENT_ID": "newContent",
  }
```

- Add it in `ctfConfig`:
```js
  const ctfConfig = getConfigForKeys([
    'CTF_NEW_CONTENT_ID'
  ])
```

- Add it in `env`:
```js
  env: {
    CTF_NEW_CONTENT_ID: ctfConfig.CTF_NEW_CONTENT_ID
  }
```

- Pull the content in the chosen page / component:
```js
  asyncData ({env, params}) {
    return client.getEntries({
      'content_type': env.CTF_NEW_CONTENT_ID
    }).then(result => {
      return {
        content: result
      }
    }).catch(console.error)
  }
```
