/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      // {
      //   source: "/products",
      //   destination: "/products?page=1",
      //   permanent: false,
      // },
      // { source: "/", destination: "/uz", permanent: false },
    ];
  },
};

module.exports = nextConfig;
