// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["nuxt-vuefire", "@nuxtjs/ionic", "@nuxtjs/tailwindcss"],
  ionic: {
    css: {
      utilities: true,
    },
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: "AIzaSyDyTmnM9K1BNABWyeVhL2IIxO7xcJAstms",
      authDomain: "nuxt-vuefire-2436b.firebaseapp.com",
      projectId: "nuxt-vuefire-2436b",
      storageBucket: "nuxt-vuefire-2436b.appspot.com",
      messagingSenderId: "906522659037",
      appId: "1:906522659037:web:4b0612cb07278f024a7334",
      measurementId: "G-T93BQEQ6H6",
    },
  },
});
