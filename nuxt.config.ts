// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: '200..700',
        Anuphan: ['400', '500'],
      }
    }]
  ],
  
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
