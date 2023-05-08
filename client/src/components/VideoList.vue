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
import VideoItem from './VideoItem.vue';

const videoStore = useVideoStore();

const videoList = videoStore.videoList;
</script>

<style lang="scss">
$thirdElementWidth: 800px;
$secondElementWidth: 600px;
$firstElementWidth: 350px;
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
      margin-bottom: 30px;
      @media (max-width: 942px) and (min-width: $thirdElementWidth) {
        width: 20%;
        margin-right: 5%;
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
      @media (max-width: $thirdElementWidth) and (min-width: $secondElementWidth) {
        width: 30%;
        margin-right: 5%;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
      @media (max-width: $secondElementWidth) and (min-width: $firstElementWidth) {
        width: 45%;
        margin-right: 0;
        &:nth-child(odd) {
          margin-right: 5%;
        }
      }
      @media (max-width: $firstElementWidth) {
        width: 100%;
        // margin-right: 0;
        // &:nth-child(odd) {
        //   margin-right: 5%;
        // }
      }
      //
      //
    }
  }
}
</style>
