import { createApp } from 'vue';
import App from './App.vue';
import vRipple from './common/directives/vRipple';
import router from './router';
import 'ant-design-vue/dist/antd.css';

import '@/assets/styles/base.css';
import {
  Form,
  Input,
  Popover,
  Skeleton,
  Tooltip,
  Upload,
} from 'ant-design-vue';

const app = createApp(App);

app.directive('ripple', vRipple);

app.use(router);
app.use(Popover);
app.use(Tooltip);
app.use(Input);
app.use(Form);
app.use(Upload);
app.use(Skeleton);

app.mount('#app');
