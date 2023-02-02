<script setup>
import axios from "axios";

import { useList } from "./useList";

const { getUser, list } = useList();

async function deleteUser(lt) {
  const response = await axios.delete(`/users/${lt.id}.json`);

  if (response.status === 200) {
    list.value = list.value.filter((i) => i.id !== lt.id);
  }

  alert("Data has been deleted successfully...");
}

getUser();
console.log("🚀 ~ file: ItemList.vue:9 ~ getUser", getUser);
</script>

<template>
  <div class="">
    <div v-if="list.length > 0" class="text-center">
      {{ list.length }} veri var
    </div>

    <div v-else class="text-center">Herhangi bir veri yoktur</div>

    <div class="w-full grid grid-cols-4 gap-4">
      <div class="card" v-for="lt in list" :key="lt.id">
        <img class="card-img-top w-80 h-60 object-cover" :src="lt.thumbnail" />
        <div class="card-body mt-3 flex flex-col gap-3">
          <p class="card-date">Date: {{ lt.date }}</p>
          <p class="card-name">Name: {{ lt.name }}</p>
          <p class="card-surname">Surname: {{ lt.surname }}</p>
          <p class="card-age">Age: {{ lt.age }}</p>
          <button
            class="card-delete bg-red-100 h-10 rounded"
            @click="deleteUser(lt)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
