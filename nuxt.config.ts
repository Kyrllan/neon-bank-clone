// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/fonts.css",
  ],
  build: {
    transpile: [
      "vuetify",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  //plugins: ["~/plugins/vue-the-mask.js"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: true,
      Epilogue: [400, 500, 600, 700],
    },
  },
});
