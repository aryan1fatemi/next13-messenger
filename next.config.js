/** @type {import('next').NextConfig} */
const nextConfig = {
  //It doesn't need the experimental object for the new version of the plugin
    swcPlugins: [["next-superjson-plugin", {}]]
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
}

module.exports = nextConfig
