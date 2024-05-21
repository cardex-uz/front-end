import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth',
            component: () => import('../pages/auth/index.vue'),
            children: [],
        },
    ],
});