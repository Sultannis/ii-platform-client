import { createApp } from "vue";
import App from "./App.vue";
import vRipple from "./common/directives/vRipple";
import router from "./router";

import "@/assets/styles/base.css";

const app = createApp(App);

app.directive("ripple", vRipple);

app.use(router);

app.mount("#app");
