// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],
  router: {
    options: {
      // 如果希望路由 URL 與頁面連結相符時套用 .active class，可以進行以下設定
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    }
  }
});
