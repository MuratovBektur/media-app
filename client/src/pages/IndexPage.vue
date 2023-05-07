<template>
  <div>data</div>
  <div v-if="localData">{{ localData }}</div>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { ref } from 'vue';

const localData = ref<any>();

async function getData() {
  const res = await api('/');
  localData.value = res.data.msg;
}

getData();
</script>
