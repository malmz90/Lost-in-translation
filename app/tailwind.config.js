/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-pink": "#F265F4",
                "custom-blue": "#0FE2FF",
            },
        },
        fontFamily: {
            caveat: ["Caveat", "cursive"],
        },
        variants: {
            extend: {
                display: ["group-focus"],
            },
        },
    },
    plugins: [],
};
