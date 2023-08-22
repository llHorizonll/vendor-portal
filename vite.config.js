import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
//import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ fastRefresh: true }),
    //basicSsl(),
    VitePWA({
      registerType: "autoUpdate", // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#339AF0",
        background_color: "#FFFFFF",
        display: "minimal-ui",
        scope: "/",
        start_url: "/",
        name: "Vendor Portal",
        short_name: "VP",
        description:
          "We value our partnership with you and please, complete the company information form. Thank you for choosing us!",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      strategies: "injectManifest",
      srcDir: "public",
      filename: "custom-sw.js",
    }),
  ],
  server: {
    port: 5555,
    // https: {
    //   key: "localhost-key.pem",
    //   cert: "localhost.pem",
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
