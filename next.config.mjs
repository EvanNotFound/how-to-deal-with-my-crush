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
        ];
    }
});
