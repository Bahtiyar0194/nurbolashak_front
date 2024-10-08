import { defineNuxtPlugin } from "nuxt/app";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, {
        hideProgressBar: true,
        position: 'top-right',
        icon: false,
        closeButton: 'i',
        closeButtonClassName: "close-button",
        closeOnClick: true,
        pauseOnHover: true
    });
});