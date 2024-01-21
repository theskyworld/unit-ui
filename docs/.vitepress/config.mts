import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  title: "unit-ui",
  description: "A vue3 component library",
  vite: {
    // 网站开发服务器运行端口
    server: {
      port: 3010,
      strictPort: true,
    },
    resolve: {
      // 配置路径别名
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "../mds/nav.md" },
    ],

    sidebar: [
      {
        text: "基础组件",
        items: [
          {
            text: "导航&nbsp;Nav",
            link: "../mds/nav.md",
          },
          {
            text: "图标&nbsp;Icon",
            link: "../mds/icon.md",
          },
          {
            text: "Logo",
            link: "../mds/logo.md",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
