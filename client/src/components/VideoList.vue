<template>
  <div class="video-list">
    <div class="video-list__title">Каталог</div>
    <div class="video-list__content">
      <VideoItem v-for="video of videoList" :key="video.id" :video="video" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVideoStore } from 'stores/video-store';
import { EMovieType, IVideo } from '../types';
import VideoItem from './VideoItem.vue';

const videoStore = useVideoStore();

const videoList = videoStore.videoList;
</script>

<style lang="scss">
.video-list {
  &__title {
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex-shrink: 0;
      margin-right: 30px;
    }
  }
}
</style>
