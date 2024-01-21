import DefaultTheme from "vitepress/theme";
import { App } from "vue";
import IconLibrary from "../../previews/icon/IconLibrary.vue";

import { NaiveUIContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "@/assets/styles/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./custom.scss";

// 注册需要使用的图标
library.add(fas);

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", NaiveUIContainer);
    app.component("icon-library", IconLibrary);
  },
};
