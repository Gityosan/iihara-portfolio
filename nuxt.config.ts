export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: '' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  typescript: {
    strict: true,
    shim: false
  },
  modules: [
    '@nuxtjs/critters',
    '@nuxt/test-utils/module',
    '@formkit/auto-animate/nuxt'
  ],
  critters: { config: { preload: 'swap', pruneSource: true } },
  vite: {
    define: {
      'process.env.DEBUG': 'false'
    }
  },
  compatibilityDate: '2024-07-31',
  devtools: { enabled: true }
})
