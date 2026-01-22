<script setup>
import {computed, onMounted} from 'vue';
import {event} from 'vue-gtag';
import {useSeoMeta} from '#imports';

const props = defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
});

const isNotFound = computed(() => props.error?.statusCode === 404);

useSeoMeta(() => ({
  title: isNotFound.value ? '404 ページが見つかりませんでした' : 'エラーが発生しました',
  description: isNotFound.value
    ? 'お探しのページは見つかりませんでした'
    : 'ページ表示中にエラーが発生しました'
}));

onMounted(() => {
  if (import.meta.env.PROD && isNotFound.value) {
    event('page:not_found');
  }
});
</script>

<template>
  <div class="content-frame fadeUp">
    <div class="fadeUp" style="animation-delay: 0.4s">
      <img alt="かもめ先輩のお辞儀" src="@/assets/kamome_sempai/ojigi.webp"/>
      <div style="font-size: 3rem">{{ isNotFound ? '404' : 'Error' }}</div>
      <div id="not-found">
        {{ isNotFound ? 'お探しのページは\n見つかりませんでした' : 'ページ表示中にエラーが発生しました' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
#not-found {
  font-size: 1.5rem;
  white-space: pre-line;
}

.content-frame {
  animation-delay: 0.2s;
  white-space: nowrap;
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
  display: flex;
  position: relative;
  text-align: center;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  background-image: url("/image/image2.webp");
  margin-bottom: 1rem;
}

.content-frame img {
  background-size: contain;
  width: 100%;
  max-width: 300px;
}

.content-frame > div {
  width: min(100vw - 200px, 300px);
  margin: 20px;
  background: #cd4fffcc;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
}

@media screen and (max-width: 450px) {
  #not-found {
    font-size: 18px;
  }
}
</style>
