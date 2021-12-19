/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // images: {
  //   domains: ["user-images.githubusercontent.com"],
  //   loader: "imgix",
  //   deviceSizes: [375, 700, 1200, 1920],
  //   path: process.env.NEXT_PUBLIC_IMAGE_PATH,
  // },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      }
    );

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
