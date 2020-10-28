export default {
  mode: "universal",
  target: "static",
  buildModules: ["@nuxt/typescript-build"],
  modules: ["bootstrap-vue/nuxt", "@nuxt/content"],
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Alessio Perugini ~ Software Engineer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        hid: "description",
        name: "description",
        content:
          "I'm a Software Engineer constantly looking for the yay-feeling and new technologies. I love challenges, developing stuff and beer(s)!",
      },
    ],
    link: [
      {
        rel: "icon",
        href: "icon.png",
      },
    ],
  },
}
