// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxt/icon", "@pinia/nuxt"],
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            title: "Уроки",
            meta: [
                {
                    name: "description",
                    content: "Застосунок для вивчення іноземних мов",
                },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },
});
