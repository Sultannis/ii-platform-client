import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#ca3838",
            "link-color": "#ca3838",
            "antd-wave-shadow-color": "#ca3838",
            "border-radius-base": "2px",
            "border-color-base": "#ca3838",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});
