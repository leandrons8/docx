import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

export default (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    basePath: process.env.PAGES_BASE_PATH,
    assetPrefix: isDev ? undefined : `https://leandrons8.github.io${process.env.PAGES_BASE_PATH}`,
    experimental: {
      optimizePackageImports: ['react-bootstrap']
    }
  };
  return nextConfig
}
