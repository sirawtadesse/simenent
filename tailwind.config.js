module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,jsx}",
        "./src/components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: 0, transform: 'translateY(-20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            animation: {
                fadeInDown: 'fadeInDown 0.8s ease-out',
                fadeInUp: 'fadeInUp 0.8s ease-out',
            },
        },
    },
    plugins: [],
}