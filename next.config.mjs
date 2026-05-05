/** @type {import('next').NextConfig} */
const nextConfig = {
  // react-leaflet v4 cannot survive StrictMode's dev-only double-mount
  // (it tries to init Leaflet on a DOM node that already has _leaflet_id).
  // Production build is unaffected since it doesn't double-mount.
  reactStrictMode: false,
  images: {
    // All imagery served from /public/images — no external hosts allowed.
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
