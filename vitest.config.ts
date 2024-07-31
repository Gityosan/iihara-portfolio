// <reference types="vitest">
import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'

export default defineVitestConfig({
  plugins: [
    AutoImport({
      dirs: ['utils', 'composables'],
      imports: ['vue', 'vue-router', 'vitest'],
      dts: 'test/auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  test: {
    root: '.',
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      enabled: true
    },
    browser: {
      provider: 'webdriverio',
      enabled: true,
      name: 'chromium' // browser name is required
    }
  }
})
