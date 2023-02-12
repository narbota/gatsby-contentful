// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbycontentfulhomepage.gatsbyjs.io/",
    title: "Andrea's Gatsy Page",
    author: `Gatsby`,
    description: "A Gatsby Starter for building homepages with Contentful",
  },
  plugins: [
    {
      resolve: '@epicdesignlabs/gatsby-source-bigcommerce',
      options: {
        auth: {
          client_id: process.env.BC_API_CLIENT_ID,
          secret: process.env.BC_API_SECRET,
          access_token: process.env.BC_API_TOKEN,
          store_hash: process.env.BC_API_STORE_HASH,
        },
        endpoints: [
          {
            nodeName: "BigCommerceProducts",
            endpoint: "/v3/catalog/products?include=variants,images,custom_fields,bulk_pricing_rules,primary_image,videos,options,modifiers",
          },
        ],
        globals: {
          schema: null,
        }
      },
      
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
  ],
}

