/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      // Enable display of the component name along with the generated className (needed for debugging).
      displayName: true,
      // Enable SSR support
      ssr: true,
      // Optional
      fileName: false,
    },
  },
  redirects: async () => {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/pung_airsoft",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
