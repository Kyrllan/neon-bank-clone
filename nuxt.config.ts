// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  css: [
    'vuetify/lib/styles/main.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    transpile: [
      'vuetify',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      Epilogue: [400, 500, 600, 700],
    },
  },
});
