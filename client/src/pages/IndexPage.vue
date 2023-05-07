<template>
  <div>{{ todos[0] }}</div>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import axios from 'axios';
import { ref } from 'vue';

const todos = ref<any>([]);
async function getTodoList() {
  const res = await api('/todos');
  todos.value = res.data;
}
async function check() {
  console.log('in');
  const res = await axios('http://192.168.0.106:4500');
  alert(res.data.msg);
}
getTodoList();
check();
</script>
