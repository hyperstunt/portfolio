// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],  
  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/e811ef59e0.js',
          crossorigin: 'anonymous',
        },
      ],
  }
}
})

