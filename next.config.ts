import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

	images: {
		remotePatterns: [
		{
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "/**",
      },{
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        pathname: "/**",
      }
		],
		unoptimized: true,
	},
};

export default nextConfig;
