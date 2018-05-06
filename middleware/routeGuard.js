export default function (context) {
  if (process.browser) {
    const nav = document.querySelector('nav')
    if (nav) {
      nav.classList.add('closed')
    }
  }
}
