<script setup>
import axios from "axios";

import { reactive } from "vue";

import { useList } from "./useList";

const { getUser } = useList();

let usersInfo = reactive({
  name: "",
  surname: "",
  age: "",
  title: "",
  company: "",
  email: "",
  linkedin: "",
  twitter: "",
  github: "",
  thumbnail: "",
});

async function onSubmit() {
  const {
    name,
    surname,
    age,
    title,
    company,
    email,
    linkedin,
    twitter,
    github,
    thumbnail,
  } = usersInfo;

  if (
    name !== "" &&
    surname !== "" &&
    age !== "" &&
    title !== "" &&
    email !== "" &&
    thumbnail !== ""
  ) {
    const response = await axios.post("/users.json", {
      name,
      surname,
      age,
      title,
      company,
      email,
      linkedin,
      twitter,
      github,
      thumbnail,
      date: new Date(),
    });

    getUser();

    usersInfo.name = "";
    usersInfo.surname = "";
    usersInfo.age = "";
    usersInfo.title = "";
    usersInfo.company = "";
    usersInfo.email = "";
    usersInfo.linkedin = "";
    usersInfo.twitter = "";
    usersInfo.github = "";
    usersInfo.thumbnail = "";

    console.log("Data has been added successfully...");

    return response;
  }

  alert("Please fill in the blank fields...");
}
</script>

<template>
  <div class="form-section">
    <h3 class="text-3xl font-semibold">Vue JS User Profile Cards</h3>

    <div class="form-container">
      <form @submit.prevent="onSubmit" class="form-submit">
        <div class="form-section-row">
          <label>Name:<span class="text-red-600">*</span></label>
          <input
            type="text"
            v-model="usersInfo.name"
            placeholder="Name"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>Surname:<span class="text-red-600">*</span></label>
          <input
            type="text"
            v-model="usersInfo.surname"
            placeholder="Surname"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>Age:<span class="text-red-600">*</span></label>
          <input
            type="number"
            v-model="usersInfo.age"
            placeholder="Age"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>Title/Job:<span class="text-red-600">*</span></label>
          <input
            type="text"
            v-model="usersInfo.title"
            placeholder="Title/Job"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>Company Name:</label>
          <input
            type="text"
            v-model="usersInfo.company"
            placeholder="Company Name"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>E-Mail<span class="text-red-600">*</span></label>
          <input
            type="email"
            v-model="usersInfo.email"
            placeholder="E-Mail"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>Linkedin Account:</label>
          <input
            type="text"
            v-model="usersInfo.linkedin"
            placeholder="Linkedin Account"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>Twitter Account:</label>
          <input
            type="text"
            v-model="usersInfo.twitter"
            placeholder="Twitter Account"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>GitHub Account:</label>
          <input
            type="text"
            v-model="usersInfo.github"
            placeholder="GitHub Account"
            class="form-input"
          />
        </div>
        <div class="form-section-row">
          <label>Thumbnail Link:<span class="text-red-600">*</span></label>
          <input
            type="text"
            v-model="usersInfo.thumbnail"
            placeholder="Thumbnail Link"
            class="form-input"
          />
        </div>

        <button class="submit-btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
