export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false
  },
  modules: ['@formkit/auto-animate/nuxt'],
  vite: {
    define: {
      'process.env.DEBUG': 'false'
    }
  },
  compatibilityDate: '2024-07-31'
})
