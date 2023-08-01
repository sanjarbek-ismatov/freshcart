/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // redirects() {
  //   return [
  //     {
  //       source: "/products",
  //       destination: "/products?page=1",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
