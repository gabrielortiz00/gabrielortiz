import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      // PDFs (the resume) stay downloadable but out of search results
      {
        source: "/:file(.*\\.pdf)",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
