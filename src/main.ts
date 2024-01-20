import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// 注册需要使用的图标
library.add(fas);
createApp(App).mount("#app");
