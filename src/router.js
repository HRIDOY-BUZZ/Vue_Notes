import { createRouter, createWebHistory } from 'vue-router';

import Login from './components/Login.vue';
import Register from './components/Registration.vue';
import Notes from './components/Notes.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/notes', component: Notes },
  // Add more routes for your application
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;