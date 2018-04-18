const webpack = require("webpack")
const execSync = require("child_process").execSync
const GIT_HEAD = execSync("git rev-parse --short head").toString("utf8")

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "qur2-space",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Qur2 space" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    "normalize.css",
    "~/css/md.css"
    // "vuepress/lib/default-theme/styles/theme.styl"
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: ["preval"]
    },
    postcss: [
      require("postcss-nested")(),
      require("postcss-responsive-type")(),
      require("postcss-hexrgba")()
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: "vue-markdown-loader"
        // options: markdown
      })
      config.plugins.push(
        new webpack.DefinePlugin({
          // "process.VERSION": JSON.stringify(require("./package.json").version),
          // Set when running command in shell
          "process.GIT_HEAD": JSON.stringify(GIT_HEAD)
        })
      )
    }
  }
}
