module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: [`Array.prototype.reduce`, `Object.keys`, `es2016`, `es2017`, `es6`, `es7`, `es6.array.iterator`, `Array.prototype.keys`, `Element.prototype.cloneNode`, `fetch`]
      },
   },
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/misc/layout.js`)
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    }
  ]
};
