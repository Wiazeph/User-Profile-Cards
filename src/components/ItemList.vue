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
        class="user-card relative p-5 w-80 h-[400px] border border-gray-700 rounded-lg shadow bg-gray-800 select-none flex flex-col gap-2"
        v-for="(lt, index) in list"
        :key="lt.id"
      >
        <div
          class="card-info absolute right-4 w-[calc(100%-32px)] flex items-center justify-between"
        >
          <div class="card-date text-sm">
            {{ new Date(lt.date).toLocaleDateString() }}
          </div>
          <div class="card-number bg-gray-600 px-2 rounded-full">
            {{ ++index }}
          </div>
        </div>

        <div
          class="user-userinfo h-full flex flex-col items-center justify-between gap-3 text-gray-100"
        >
          <div
            class="user-img w-40 h-40 hover:scale-105 transition-all ease-in-out"
          >
            <img
              class="rounded-full w-full h-full object-cover"
              :src="lt.thumbnail"
            />
          </div>

          <div class="flex flex-col gap-3 w-full select-text">
            <div class="flex items-center justify-center gap-2">
              <div class="user-name">
                {{ lt.name }}
              </div>
              <div class="user-surname">
                {{ lt.surname }}
              </div>
              <div class="user-age bg-gray-600 px-2 rounded-full select-none">
                {{ lt.age }}
              </div>
            </div>

            <div class="user-title text-center">
              {{ lt.title }}
            </div>

            <div class="user-email text-center">
              {{ lt.email }}
            </div>
          </div>

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
