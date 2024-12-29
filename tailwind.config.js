/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
    theme: {
        screens: {
            xs: "420px",
            sm: "640px",
            md: "768px",
            xmd: "900px",
            lg: "1024px",
            xl: "1280px",
        },
        fontFamily: {
            montserrat: "Montserrat",
            poppins: "Poppins",
            inter: "Inter",
            publicSans: "Public Sans",
        },
        extend: {
            colors: {
                background: "#090447",
                gold: "#ffd101",
                gradient1: "#48cae2",
                gradient2: "#fee893",
                offblack: "#090447",
                bubble: "#a1d5e0",
                lightYellow: "#fff3c4",
                grey: "#737373",
            },
        },
    },
    plugins: [],
};
