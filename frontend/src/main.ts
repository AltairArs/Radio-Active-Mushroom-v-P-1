import { createApp } from 'vue'
import './style.scss'
import router from "./router.ts";
import App from './App.vue'
import apolloProvider from "./apollo.ts";

createApp(App).use(router).use(apolloProvider).mount('#app')
