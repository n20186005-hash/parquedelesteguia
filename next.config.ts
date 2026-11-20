const nextConfig = {
  output: "standalone" as const,
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host" as const, value: "parquedelesteguia.com" }],
      destination: "https://www.parquedelesteguia.com/:path*",
      permanent: true,
    }];
  },
  webpack: (config: unknown) => config,
};

export default nextConfig;
