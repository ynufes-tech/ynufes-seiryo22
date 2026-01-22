import VueGtag from 'vue-gtag';
import {defineNuxtPlugin} from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.env.PROD) {
    return;
  }

  nuxtApp.vueApp.use(VueGtag, {
    config: {id: 'G-88XSGWF51S'}
  });
});
