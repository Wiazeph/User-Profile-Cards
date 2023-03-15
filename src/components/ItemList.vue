<script setup>
// import axios from "axios";

import { useList } from "./useList";

const { list } = useList();

// async function deleteUser(lt) {
//   const response = await axios.delete(`/users/${lt.id}.json`);

//   if (response.status === 200) {
//     list.value = list.value.filter((i) => i.id !== lt.id);

//     console.log("Data has been deleted successfully...");
//   }
// }

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
        <div class="card-base">
          <div class="card-number">
            {{ ++index }}
          </div>

          <!-- <button class="card-delete" @click="deleteUser(lt)">
            <i class="card-delete-icon fa-solid fa-trash"></i>
          </button> -->
        </div>
        <div class="card-header-bg"></div>

        <img :src="lt.thumbnail" alt="" class="user-img" />

        <div class="user-info">
          <div class="flex items-center justify-center gap-1 text-lg font-bold">
            <div class="user-fullname">{{ lt.name }} {{ lt.surname }}</div>

            <div class="user-age select-none">- {{ lt.age }}</div>
          </div>

          <div class="user-title">
            <div class="text-center">
              {{ lt.title }}
            </div>

            <div class="user-company" v-if="lt.company">
              - at
              <div class="text-black select-text">@{{ lt.company }}</div>
            </div>
          </div>

          <div class="user-email" @click="copyCB(lt.email)">
            {{ lt.email }}
          </div>
        </div>

        <div class="user-socials" v-if="lt.linkedin || lt.twitter || lt.github">
          <div class="text-white text-sm select-none">Follow!</div>
          <ul class="user-socials-links">
            <li v-if="lt.linkedin">
              <a
                :href="`https://www.linkedin.com/in/${lt.linkedin}`"
                target="_blank"
                class="social-link hover:text-[#0a66c2]"
                ><i class="social-link-icon fa-brands fa-linkedin"></i
              ></a>
            </li>
            <li v-if="lt.twitter">
              <a
                :href="`https://www.twitter.com/${lt.twitter}`"
                target="_blank"
                class="social-link hover:text-[#1da1f2]"
                ><i class="social-link-icon fa-brands fa-twitter"></i
              ></a>
            </li>
            <li v-if="lt.github">
              <a
                :href="`https://www.github.com/${lt.github}`"
                target="_blank"
                class="social-link hover:text-[#00405d]"
                ><i class="social-link-icon fa-brands fa-github"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
