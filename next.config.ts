import type { NextConfig } from "next";

/**
 * Next.js config for GitHub Pages (static export).
 * - output: "export" → 정적 사이트 빌드
 * - images.unoptimized: true → next/image 최적화 비활성화 (Pages에는 이미지 서버 없음)
 * - trailingSlash: true → 정적 라우팅 호환성 개선
 * - basePath / assetPrefix → 레포명(djutility) 고정
 */
const isProd = process.env.NODE_ENV === "production";

// GitHub Pages 프로젝트 레포 이름
const repoName = "djutility";

const basePath = isProd ? `/${repoName}` : "";
const assetPrefix = isProd ? `/${repoName}/` : "";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    basePath,
    assetPrefix,
};

export default nextConfig;
