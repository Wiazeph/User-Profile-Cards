<script setup>
import axios from "axios";

import { useList } from "./useList";

const { list } = useList();

async function deleteUser(lt) {
  const response = await axios.delete(`/users/${lt.id}.json`);

  if (response.status === 200) {
    list.value = list.value.filter((i) => i.id !== lt.id);

    console.log("Data has been deleted successfully...");
  }
}
</script>

<template>
  <div class="user-lists-section flex flex-col items-center">
    <div class="text-xl w-fit my-8 sm:my-9 md:my-10 lg:my-11 xl:my-12">
      <div v-if="list.length > 1">
        There are currently {{ list.length }} users' data.
      </div>
      <div v-else-if="list.length == 1">
        There is currently only {{ list.length }} user's data.
      </div>
      <div v-else>There is no user data.</div>
    </div>

    <div
      class="user-lists w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    >
      <div
        class="user-card p-4 border border-gray-700 rounded-lg shadow bg-gray-800 select-none"
        v-for="lt in list"
        :key="lt.id"
      >
        <!-- <div class="card-number">idnumber</div> -->
        <!-- <div class="card-date">Date: {{ lt.date }}</div> -->

        <div
          class="user-userinfo flex items-center justify-center flex-col gap-5 text-gray-100"
        >
          <img class="user-img w-80 h-60 object-cover" :src="lt.thumbnail" />

          <div class="flex items-center justify-center gap-1">
            <div class="user-fullname">{{ lt.name }} {{ lt.surname }}</div>
            <div class="user-age bg-gray-600 py-1 px-2 rounded-full">
              {{ lt.age }}
            </div>
          </div>

          <!-- <div class="user-title"></div> -->

          <button
            class="card-delete bg-red-100 h-10 w-full rounded-md text-black"
            @click="deleteUser(lt)"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
