import { defineStore } from "pinia";

export const useShowPaymentSystems = defineStore({
    id: 'payment-systems',
    state: () => ({
        isShow: false
    }),
});