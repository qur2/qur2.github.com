const path = require("path")
const webpack = require("webpack")
const execSync = require("child_process").execSync
const poststylus = require("poststylus")
const createMarkdown = require("vuepress/lib/markdown")

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
    "prismjs/themes/prism-tomorrow.css",
    "vuepress/lib/default-theme/styles/theme.styl"
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
      // https://github.com/vuejs/vuepress/blob/14d4d2581f4b7c71ea71a41a1849f582090edb97/lib/webpack/createBaseConfig.js#L92
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: require.resolve("vuepress/lib/webpack/markdownLoader"),
            options: {
              sourceDir: "./blog",
              markdown: createMarkdown()
            }
          }
        ]
      })
      // fake the temp folder used in vuepress
      config.resolve.alias["@temp"] = path.resolve(__dirname, "temp")
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.GIT_HEAD": JSON.stringify(GIT_HEAD)
        })
      )
      config.plugins.push(
        new webpack.LoaderOptionsPlugin({
          options: {
            stylus: {
              use: [poststylus(["autoprefixer", "rucksack-css"])]
            }
          }
        })
      )
    }
  }
}
