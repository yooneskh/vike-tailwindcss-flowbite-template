export { onRenderClient }

import { createApp } from './app'

let app
async function onRenderClient(pageContext) {
  if (!pageContext.Page) throw new Error('My onRenderClient() hook expects pageContext.Page to be defined')

  if (!app) {
    app = createApp(pageContext)
    app.mount('#app')
  } else {
    app.changePage(pageContext)
  }
  document.title = 'Appeggio'
}
