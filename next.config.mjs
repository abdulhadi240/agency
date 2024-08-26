/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
  };

  export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })(nextConfig);
  
