/** @type {import('next').NextConfig} */

const withVideos = require('next-videos')

module.exports = withVideos({
  // redirects from "/" to "/en"
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true
      }
    ]
  },
  // server actions
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '1gb'
  }
})