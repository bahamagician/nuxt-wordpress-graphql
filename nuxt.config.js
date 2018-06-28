const nodeExternals = require("webpack-node-externals");
const resolve = dir => require("path").join(__dirname, dir);
require("./plugins/fragments");
module.exports = {
  /*
    ** Headers of the page
    */
  head: {
    title: "{{ name }}",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "{{ description }}" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  modules: ["nuxt-sass-resources-loader"],

  sassResources: ["~/assets/style/app.scss", "~/assets/style/app.styl"],
  plugins: [
    { src: "~/plugins/apollo.js" },
    "~/plugins/vuetify.js",
    "~/plugins/vuelidate.js"
  ],
  css: ["~/assets/style/app.styl"],
  devtool: "#eval-source-map",
  /*
    ** Customize the progress bar color
    */
  loading: { color: "#3B8070" },

  /*
    ** Build configuration
    */
  build: {
    cssSourceMap: false,
    babel: {
      plugins: [
        [
          "transform-imports",
          {
            vuetify: {
              transform: "vuetify/es5/components/${member}",
              preventFullImport: true
            }
          }
        ]
      ]
    },

    vendor: ["vuetify", "graphql-tag"],
    extractCSS: true,
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      });
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
