export { onRenderHtml }

import { renderToString as renderToString_ } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { createApp } from './app'

async function onRenderHtml(pageContext) {
  if (!pageContext.Page) throw new Error('My render() hook expects pageContext.Page to be defined')

  const app = createApp(pageContext)

  const appHtml = await renderToString(app)

  const title = 'Appeggio';
  const desc = pageContext.data?.description || pageContext.config.description || 'Demo of using Vike'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
    }
  }
}

async function renderToString(app) {
  let err
  app.config.errorHandler = (err_) => {
    err = err_
  }
  const appHtml = await renderToString_(app)
  if (err) throw err
  return appHtml
}
