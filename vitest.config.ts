import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    include: ["**/*.spec.ts"],
  },
  plugins: [vue()],
  // 配置路径别名
  resolve: {
    alias: {
      "@": "./src",
    },
  },
});
