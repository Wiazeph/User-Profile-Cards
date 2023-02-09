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

async function copyCB(email) {
  await navigator.clipboard.writeText(email);

  alert("Email has been copied to clipboard...");
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

    <div class="user-lists w-full grid grid-cols-2 justify-items-center gap-7">
      <div
        class="user-card relative flex items-center justify-between px-6 py-8 text-gray-900 bg-[#b2e5e6] w-full h-[350px] border-[24px] border-[#a0cdcf] rounded-3xl shadow"
        v-for="(lt, index) in list"
        :key="lt.id"
      >
        <button
          class="card-delete absolute top-3 right-4 text-xl text-red-900"
          @click="deleteUser(lt)"
        >
          Delete
        </button>

        <div class="user-userinfo h-full flex flex-col justify-between">
          <div class="flex flex-col gap-5">
            <div class="flex items-center gap-1 text-xl font-medium">
              <div class="user-name">
                {{ lt.name }}
              </div>
              <div class="user-surname">
                {{ lt.surname }}
              </div>
              <div class="user-age select-none">- {{ lt.age }}</div>
            </div>

            <div class="user-title">
              {{ lt.title }}
            </div>

            <div class="user-email cursor-pointer" @click="copyCB(lt.email)">
              {{ lt.email }}
            </div>
          </div>

          <div class="user-socials">
            <div class="mb-4 text-gray-600 select-none">Follow!</div>
            <ul class="user-socials-links flex items-center gap-5">
              <li>
                <a href="" class="social-link hover:bg-[#0a66c2]"></a>
              </li>
              <li>
                <a href="" class="social-link hover:bg-[#1da1f2]"></a>
              </li>
              <li>
                <a href="" class="social-link hover:bg-[#3f729b]"></a>
              </li>
              <li>
                <a href="" class="social-link hover:bg-[#00405d]"></a>
              </li>
            </ul>
          </div>
        </div>

        <img
          :src="lt.thumbnail"
          alt=""
          class="user-img w-48 h-48 rounded-full hover:scale-105 transition-all duration-300 ease-in-out"
        />

        <!-- <div
          class="card-info absolute bottom-6 right-6 flex items-center gap-5"
        >
          <div class="card-date text-sm">
            {{ new Date(lt.date).toLocaleDateString() }}
          </div>
          <div class="card-number bg-gray-600 px-2 rounded-full">
            {{ ++index }}
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
