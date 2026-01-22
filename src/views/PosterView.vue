<script setup>
import {onMounted} from 'vue';
import {event} from 'vue-gtag';
import {useSeoMeta} from '#imports';

useSeoMeta({
  title: 'ポスター展覧会',
  description:
    '2月頃に22清陵祭のポスター案を募集致しました。たくさんのご応募、誠にありがとうございました。このページでは応募作品全3点を紹介します!'
});

onMounted(() => {
  if (import.meta.env.PROD) {
    event('page:poster');
  }
});
</script>
<template>
  <div></div>
</template>


<style scoped>

</style>
