import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth',
            component: () => import('../layout/auth.vue'),
            children: [
                {
                    path: '',
                    component: () => import('../pages/auth/login.vue'),
                },
                {
                    path: 'verify',
                    component: () => import('../pages/auth/verify.vue'),
                },
            ]
        },
        {
            path: '/',
            component: () => import('../layout/bottom-bar.vue'),
            children: [
                {
                    path: 'home',
                    component: () => import('../pages/home/index.vue'),
                },
                {
                    path: 'catalog',
                    component: () => import('../pages/catalog/index.vue'),
                },
                {
                    path: 'orders',
                    component: () => import('../pages/orders/index.vue'),
                },
                {
                    path: 'profile',
                    component: () => import('../pages/profile/index.vue'),
                },
            ],
        }
    ],
});