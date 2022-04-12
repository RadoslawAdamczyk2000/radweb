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
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com", 
      "placeimg.com",
      "localhost",
      "localhost:3000"
    ],
  },
});
