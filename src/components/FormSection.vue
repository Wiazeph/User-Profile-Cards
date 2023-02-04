<script setup>
import axios from "axios";

import { reactive } from "vue";

import { useList } from "./useList";

const { getUser } = useList();

let usersInfo = reactive({
  name: "",
  surname: "",
  age: "",
  thumbnail: "",
});

async function onSubmit() {
  const { name, surname, age, thumbnail } = usersInfo;

  if (name !== "" && surname !== "" && age !== "" && thumbnail !== "") {
    const response = await axios.post("/users.json", {
      name,
      surname,
      age,
      thumbnail,
      date: new Date(),
    });

    getUser();

    usersInfo.name = "";
    usersInfo.surname = "";
    usersInfo.age = "";
    usersInfo.thumbnail = "";

    console.log("Data has been added successfully...");

    return response;
  }

  alert("Please fill in the blank fields...");
}
</script>

<template>
  <div class="flex flex-col items-center gap-12">
    <h3 class="text-3xl font-semibold">
      Vue JS Firebase Database - Realtime Database
    </h3>

    <div class="w-[600px] rounded border-4 border-solid border-black">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-5 p-4">
        <div class="form-section">
          <label>Name:</label>
          <input
            type="text"
            v-model="usersInfo.name"
            placeholder="Name"
            class="info-Input"
          />
        </div>
        <div class="form-section">
          <label>Surname:</label>
          <input
            type="text"
            v-model="usersInfo.surname"
            placeholder="Surname"
            class="info-Input"
          />
        </div>
        <div class="form-section">
          <label>Age:</label>
          <input
            type="number"
            v-model="usersInfo.age"
            placeholder="Age"
            class="info-Input"
          />
        </div>
        <div class="form-section">
          <label>Thumbnail Link:</label>
          <input
            type="text"
            v-model="usersInfo.thumbnail"
            placeholder="Thumbnail Link"
            class="info-Input"
          />
        </div>
        <button class="bg-black rounded-md h-10">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
