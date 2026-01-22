import {defineStore} from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    slides: [{slide: {url: '/image/loading.png'}}],
    sponsors: [{image: {url: '/image/loading1.png'}}],
    updates: []
  }),
  actions: {
    setSlides(newSlides) {
      this.slides = newSlides;
    },
    setSponsors(newSponsors) {
      this.sponsors = newSponsors;
    },
    setUpdates(newUpdates) {
      this.updates = newUpdates;
    }
  }
});
