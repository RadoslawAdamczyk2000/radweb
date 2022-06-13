/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX({
  pageExtensions:[
    "ts", 
    "tsx", 
    "js", 
    "jsx", 
    "md", 
    "mdx"
  ],
  i18n:{
    locales:["pl","en","es","de","pt","fr"],
    defaultLocale:"pl",
  },
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com", 
      "placeimg.com",
      "github.com",
      "raw.githubusercontent.com",
      "images.unsplash.com"
    ],
  },
});
