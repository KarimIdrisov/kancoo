/** @type {import('next').NextConfig} */

module.exports = {
  async redirects(){
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true
      }
    ]
  },

  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '1gb'
  }
}