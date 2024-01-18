/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['wnhgpupyoymjxeiykmgx.supabase.co'],
  },
};

module.exports = nextConfig;
