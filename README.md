# Sentences 💬

This is a simple web application to display short stories.

## To do
- [ ] Improve `_slug` page design
- [ ] Write and design `/about` page
- [ ] Import content in store, not directly in pages
- [x] Manage nav links order

## Tools

The website is built with [Nuxt.js](https://nuxtjs.org) and the content is pulled from [Contentful](https://contentful.com). It is deployed online as a static website thanks to [Surge.sh](https://surge.sh).

## Development

Launch local server:
```shell
npm run dev
```

Generate static files:
```shell
npm run generate
```

Deploy on [Surge.sh](https://surge.sh):
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
```shell
  const ctfConfig = getConfigForKeys([
    'CTF_NEW_CONTENT_ID'
  ])
```

- Add it in `env`:
```shell
  env: {
    CTF_NEW_CONTENT_ID: ctfConfig.CTF_NEW_CONTENT_ID
  }
```

- Pull the content in the choosen page:
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
