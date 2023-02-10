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
  <div class="user-lists-section">
    <div class="data-info">
      <div v-if="list.length > 1">
        There are currently {{ list.length }} users' data.
      </div>
      <div v-else-if="list.length == 1">
        There is currently only {{ list.length }} user's data.
      </div>
      <div v-else>There is no user data.</div>
    </div>

    <div class="user-lists">
      <div class="user-card" v-for="(lt, index) in list" :key="lt.id">
        <div class="card-number">
          {{ ++index }}
        </div>

        <button class="user-card-delete" @click="deleteUser(lt)">
          <i class="card-icons fa-solid fa-trash"></i>
        </button>

        <div class="user-card-info">
          <div class="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <div
              class="flex items-center justify-center sm:justify-start gap-1 text-xl sm:text-2xl font-medium"
            >
              <div class="user-name">
                {{ lt.name }}
              </div>
              <div class="user-surname">
                {{ lt.surname }}
              </div>
              <div class="user-age select-none">- {{ lt.age }}</div>
            </div>

            <div class="user-title text-lg">
              {{ lt.title }}
            </div>

            <div class="user-email cursor-pointer" @click="copyCB(lt.email)">
              {{ lt.email }}
            </div>
          </div>

          <div class="user-socials">
            <div class="mb-4 text-gray-600 text-sm sm:text-base select-none">
              Follow!
            </div>
            <ul class="user-socials-links">
              <li>
                <a href="" class="social-link hover:bg-[#0a66c2]"
                  ><i class="card-icons fa-brands fa-linkedin"></i
                ></a>
              </li>
              <li>
                <a href="" class="social-link hover:bg-[#1da1f2]"
                  ><i class="card-icons fa-brands fa-twitter"></i
                ></a>
              </li>
              <li>
                <a href="" class="social-link hover:bg-[#3f729b]"
                  ><i class="card-icons fa-brands fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="" class="social-link hover:bg-[#00405d]"
                  ><i class="card-icons fa-brands fa-github"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <img :src="lt.thumbnail" alt="" class="user-img" />

        <!-- <div class="card-info absolute bottom-6 right-6">
          <div class="card-date text-sm">
            {{ new Date(lt.date).toLocaleDateString() }}
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
