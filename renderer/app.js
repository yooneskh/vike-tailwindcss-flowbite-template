export { createApp }

import { createSSRApp, h, markRaw, reactive, ref } from 'vue'
import PageLayout from './PageLayout.vue'
import { setPageContext } from './usePageContext'

function createApp(pageContext) {
  const { Page } = pageContext

  const pageRef = ref(markRaw(Page))

  const PageWithLayout = {
    render() {
      return h(PageLayout, {}, { default: () => h(pageRef.value) })
    }
  }

  const app = createSSRApp(PageWithLayout)

  Object.assign(app, {
    changePage: (pageContext) => {
      const data = pageContext.data ?? {}
      Object.assign(dataReactive, data)
      Object.assign(pageContextReactive, pageContext)
      pageRef.value = markRaw(pageContext.Page)
    }
  })

  const data = pageContext.data ?? {}
  const dataReactive = reactive(data)
  const pageContextReactive = reactive(pageContext)
  setPageContext(app, pageContextReactive)

  return app
}
