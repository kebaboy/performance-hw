import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';
import htmlMinifier from 'vite-plugin-html-minifier';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        compression({
            algorithm: "gzip", // Can be 'gzip' or 'brotliCompress'
            ext: ".gz", // The extension for compressed files
            deleteOriginFile: false,
        }),
        htmlMinifier({
            minifyJS: true,
            minifyCSS: true,
            collapseWhitespace: true,
            removeComments: true,
        }),
    ],
    base: "./",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: (assetInfo) => {
                    // Keep original asset names for specific types (e.g., images)
                    if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
                        return "assets/[name][extname]";
                    }
                    // Add hash for other asset types (if desired)
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
});
