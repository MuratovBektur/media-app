<template>
  <div @click="goToLink" class="video-item">
    <div class="video-item__img-container">
      <img class="video-item__img" :src="video.previewUrl" :alt="video.title" />
    </div>
    <div class="">{{ video.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { IVideo } from '../types';
import { useRouter } from 'vue-router';
import { toRefs } from 'vue';

interface Props {
  video: IVideo;
}
const router = useRouter();
const props = defineProps<Props>();

const { video } = toRefs(props);

function goToLink() {
  return router.push(`video/${video.value.id}`);
}
</script>

<style lang="scss">
.video-item {
  cursor: pointer;
  &__img {
    width: 100%;
    aspect-ratio: 7 / 10;
    object-fit: cover;
    @media (min-width: 942px) {
      max-height: 280px;
    }
    &-container {
      width: 100%;
    }
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex-shrink: 0;
    }
  }
}
</style>
