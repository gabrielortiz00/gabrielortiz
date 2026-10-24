import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old resume URL, in case it was shared before the file was renamed
      {
        source: "/gabriel_ortiz_resume_2026.pdf",
        destination: "/Gabriel_Ortiz_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
