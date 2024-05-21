import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth',
            component: () => import('../pages/auth/layout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('../pages/auth/login.vue'),
                },
                {
                    path: 'verify',
                    component: () => import('../pages/auth/verify.vue'),
                }
            ]
        },
    ],
});