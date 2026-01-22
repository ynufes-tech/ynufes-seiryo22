<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';
import {event} from 'vue-gtag';
import EventTile from '@/components/EventTile';
import data from '@/assets/data.json';
import {useSeoMeta} from '#imports';

const route = useRoute();
const parseType = (value) => {
  const raw = Array.isArray(value) ? value[0] : value;
  const parsed = parseInt(raw, 10);
  return Number.isNaN(parsed) ? 1 : parsed;
};

const mode = ref(parseType(route.params.type));
const eventData = computed(() => {
  switch (mode.value) {
    case 3:
      return data.filter((x) => x.id < 2000);
    case 2:
      return data.filter((x) => x.id > 2000);
    case 1:
    default:
      return data;
  }
});

const trackEvent = (label) => {
  if (import.meta.env.PROD) {
    event(label);
  }
};

watch(
  () => route.params.type,
  (value) => {
    mode.value = parseType(value);
  }
);

onMounted(() => {
  trackEvent(`page:event_list_${mode.value}_initial`);

  const eventsBlock = document.getElementById('events_block');
  const selector = document.getElementById('type_selector');
  if (eventsBlock && selector) {
    selector.addEventListener('click', () => {
      eventsBlock.classList.remove('fadeUp');
      setTimeout(() => {
        eventsBlock.classList.add('fadeUp');
      });
    });
  }
});

useSeoMeta({
  title: '企画一覧',
  description:
    '22清陵祭で開催するオンライン企画を一覧で紹介しています。それぞれの企画を選択するとその詳細を確認できます。'
});

function setType(t) {
  if (mode.value !== t) {
    mode.value = t;
  }
  trackEvent(`page:event_list_${mode.value}`);
}
</script>
<template>
  <div class="content-frame">
    <div id="controller">
      <div id="type_selector" class="fadeUp">
        <div :class="{'active-type':mode===1}" @click="setType(1)">全て</div>
        <div :class="{'active-type':mode===2}" @click="setType(2)">本部企画</div>
        <div :class="{'active-type':mode===3}" @click="setType(3)">団体企画</div>
      </div>
    </div>
    <div id="events_block" class="fadeUp">
      <router-link v-for="eventItem in eventData" :key="eventItem.key"
                   :to="`/events/detail/${eventItem.id}`">
        <EventTile :eventData="eventItem"></EventTile>
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#controller {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}

#type_selector {
  animation-delay: 0.2s;
  display: flex;
  flex-direction: row;
  width: fit-content;
  border-radius: 20px;
  background: linear-gradient(90deg, #e810b2, #f25ad4);

  margin: 0 auto;
  padding: 5px;
  color: white;

  > div {
    cursor: pointer;
    padding: 12px;
    font-size: 30px;
    border-radius: 20px;
  }
}

.active-type {
  color: #e810b2;
  background: white;
}

#events_block {
  margin-top: 20px;
  animation-delay: 0.4s;
  box-sizing: border-box;
  justify-content: center;
  gap: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;
}

.content-frame {
  display: flex;
  flex-direction: column;
  width: min(100%, 70rem);
  margin-inline: auto;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 400px) {
  #type_selector {
    > div {
      font-size: 23px;
    }
  }
}
</style>
