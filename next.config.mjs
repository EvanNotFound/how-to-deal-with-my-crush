import withNextra from "nextra";

const withNextraConfig = withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextraConfig({
    redirects: async () => {
        return [
            {
                source: '/texting-before/:path*',
                destination: '/situational-before/:path*',
                permanent: true,
            },
            {
                source: '/texting-during/:path*',
                destination: '/situational-during/:path*',
                permanent: true,
            },
            {
                source: '/what-to-do-before/:path*',
                destination: '/tutorial-before/:path*',
                permanent: true,
            },

        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: "/dxn1ulklt/**"
            },
        ],
    },
});
