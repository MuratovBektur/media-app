<template>
  <div class="video-page" v-if="video">
    <video style="width: 100%" controls autoplay>
      <source :src="video.url" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button @click="router.push('/')" class="video-page__btn">Назад</button>
  </div>
</template>

<script setup lang="ts">
import { useVideoStore } from 'stores/video-store';
import { IVideo } from '../types';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const videoStore = useVideoStore();
const route = useRoute();
const router = useRouter();

const videoId = +route.params.id;
const video = ref<IVideo>();

const videoList = videoStore.videoList;
function onStart() {
  if (isNaN(videoId)) return router.push('/not-found');

  const videoIdx = videoList.findIndex((video) => video.id === videoId);
  if (videoIdx === -1) return router.push('/not-found');

  video.value = videoList[videoIdx];
}

onStart();
</script>

<style lang="scss">
.video-page {
  &__btn {
    padding: 10px;
    width: 200px;
    background-color: #9333ea;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
  }
}
</style>
