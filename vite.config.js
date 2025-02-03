import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig(({ mode }) => ({
    plugins: [
        laravel({
            input: ["resources/css/site.css", "resources/js/site.js"],
            refresh: true,
        }),
    ],
    server: {
        cors: mode === "development",
        host: "localhost",
        hmr: {
            host: "localhost",
        },
    },
}));
