import type { NextConfig } from "next";

/**
 * Next.js config for GitHub Pages (static export).
 * - output: "export"  → SSG 빌드
 * - images.unoptimized: true → next/image 비활성화 (Pages에서 이미지 최적화 서버 없음)
 * - trailingSlash: true → 정적 호환성 개선(폴더형 경로)
 * - basePath / assetPrefix → 환경변수로 제어 (배포 환경 따라 유연하게)
 */
const isProd = process.env.NODE_ENV === "production";

// 환경변수로 전달 받은 basePath (레포명/커스텀 경로). 앞에 '/'가 없다면 보정
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalizedBase = rawBase ? (rawBase.startsWith("/") ? rawBase : `/${rawBase}`) : "";

// 프로덕션에서만 basePath 적용 (개발 서버에서는 빈값 유지)
const basePath = isProd ? normalizedBase : "";
const assetPrefix = basePath ? `${basePath}/` : "";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    basePath,
    assetPrefix,
};

export default nextConfig;
