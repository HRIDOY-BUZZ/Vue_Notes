import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';

createApp(App).use(router).mount('#app')