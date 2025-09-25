/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "var(--brand)",
                    "02": "var(--brand-02)",
                    "01": "var(--brand-01)",
                    "10": "var(--brand-10)",
                    "20": "var(--brand-20)",
                },
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
                ".text-nowrap": {
                    "text-wrap": "nowrap"
                },
                '.flex-center': {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center',
                },
                '.font-title': {
                    fontWeight: 'bold',
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                },
                '.text-xxs': {
                    fontSize: '0.6rem',
                    lineHeight: '1rem',
                },
                '.text-xxxs': {
                    fontSize: '0.3rem',
                    lineHeight: '0.4rem',
                },
                '.text-xxl': {
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                },
                '.text-xxxl': {
                    fontSize: '2rem',
                    lineHeight: '2.5rem',
                },
            });
        },
    ],
};