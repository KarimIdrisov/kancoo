/** @type {import('next').NextConfig} */

module.exports = {
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
}