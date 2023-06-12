// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  ssr: false,
  css: ["@fortawesome/fontawesome-free/css/all.min.css"],
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true,
  },
  alias: {
    jose: resolve(__dirname, "./node_modules/jose/dist/browser/index.js"),
    "@panva/hkdf": resolve(
      __dirname,
      "./node_modules/@panva/hkdf/dist/web/index.js"
    ),
  },
});
