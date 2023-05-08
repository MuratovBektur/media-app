<template>
  <div class="video-page" v-if="video">
    <video ref="videoRef" style="width: 100%" controls autoplay>
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
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { debounce, round } from 'lodash';

const videoStore = useVideoStore();
const route = useRoute();
const router = useRouter();

const videoId = +route.params.id;
const video = ref<IVideo>();

const videoList = videoStore.videoList;
function onStart() {
  const NOT_FOUND_PAGE = 'NotFound';
  if (isNaN(videoId)) return router.push({ name: NOT_FOUND_PAGE });

  const videoIdx = videoList.findIndex((video) => video.id === videoId);
  if (videoIdx === -1) return router.push({ name: NOT_FOUND_PAGE });

  video.value = videoList[videoIdx];
}

onStart();

/* saveVideoTime start */

const localKey = `video_${videoId}`;
const videoRef = ref<HTMLVideoElement>();

const setVideoTime = debounce((event) => {
  const currentTime = event.target?.currentTime;

  const skipedTime = round(currentTime, -1);
  const time = skipedTime >= 10 ? skipedTime - 5 : 0;

  localStorage.setItem(localKey, time.toString());
}, 5000);

onMounted(() => {
  const storagedTime = localStorage.getItem(localKey) ?? 0;

  if (!videoRef.value) return;

  videoRef.value.currentTime = +storagedTime;

  videoRef.value.addEventListener('progress', setVideoTime);
});

onBeforeUnmount(() => {
  videoRef.value?.removeEventListener('progress', setVideoTime);
});

/* saveVideoTime end */
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
