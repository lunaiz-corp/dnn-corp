import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';
import { createHead } from '@vueuse/head';

const app = createApp(App).use(router);
const head = createHead();

app.use(VueAxios, axios)

app.config.globalProperties.$axios = axios;
app.use(head);

app.mount('#app')

