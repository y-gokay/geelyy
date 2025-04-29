/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        "postcss-pxtorem": {
            propList: ["*"],
        },
    },
};

export default config;
