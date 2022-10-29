import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";

import "@/assets/styles/base.css";
import { Popover } from "ant-design-vue";

const app = createApp(App);

app.use(router);
app.use(Popover);

app.mount("#app");
