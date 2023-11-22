/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.lojachinashop.com.br", "www.designi.com.br",  "img.freepik.com" ],
      },
      experimental: {
        serverComponents: true,
        serverComponentsMiddleware: true,
      },
}

module.exports = nextConfig