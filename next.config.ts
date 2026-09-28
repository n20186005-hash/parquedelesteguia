const nextConfig = {
  output: "standalone" as const,
  webpack: (config: unknown) => config,
};

export default nextConfig;
