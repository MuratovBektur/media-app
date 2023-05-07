<template>
  <div>{{ todos[0] }}</div>
  <div v-if="localData">{{ localData }}</div>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import axios from 'axios';

const todos = ref<any>([]);
const localData = ref<any>();
async function getTodoList() {
  const res = await api('/todos');
  todos.value = res.data;
}
async function check() {
  console.log('in');
  const res = await axios('http://192.168.0.106:8443');
  localData.value = res.data.msg;
  // alert(res.data.msg);
}
getTodoList();
check();
</script>
