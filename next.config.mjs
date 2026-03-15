/** @type {import('next').NextConfig} */
const nextConfig = {
  // 避免 Vercel 构建时 ESLint 配置序列化报错
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
