<script setup>
import axios from "axios";

import { reactive } from "vue";

import { useList } from "./useList";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

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

const FormValidationSchema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().required().positive().integer(),
  title: yup.string().required(),
  company: yup.string(),
  email: yup.string().required().email(),
  linkedin: yup.string(),
  twitter: yup.string(),
  github: yup.string(),
  thumbnail: yup.string().required().url(),
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

  await axios.post("/users.json", {
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
}
</script>

<template>
  <div class="form-section">
    <h3 class="text-3xl font-semibold">Vue JS User Profile Cards</h3>

    <div class="form-container">
      <Form
        @submit="onSubmit"
        class="form-submit"
        :validation-schema="FormValidationSchema"
      >
        <div class="form-section-row">
          <label>Name:<span class="text-red-600">*</span></label>
          <Field
            name="name"
            v-model="usersInfo.name"
            placeholder="Name"
            class="form-input"
          />
          <ErrorMessage name="name" />
        </div>
        <div class="form-section-row">
          <label>Surname:<span class="text-red-600">*</span></label>
          <Field
            name="surname"
            v-model="usersInfo.surname"
            placeholder="Surname"
            class="form-input"
          />
          <ErrorMessage name="surname" />
        </div>
        <div class="form-section-row">
          <label>Age:<span class="text-red-600">*</span></label>
          <Field
            name="age"
            v-model="usersInfo.age"
            placeholder="Age"
            class="form-input"
          />
          <ErrorMessage name="age" />
        </div>
        <div class="form-section-row">
          <label>Title/Job:<span class="text-red-600">*</span></label>
          <Field
            name="title"
            v-model="usersInfo.title"
            placeholder="Title/Job"
            class="form-input"
          />
          <ErrorMessage name="title" />
        </div>
        <div class="form-section-row">
          <label>Company Name:</label>
          <Field
            name="company"
            v-model="usersInfo.company"
            placeholder="Company Name"
            class="form-input"
          />
          <ErrorMessage name="company" />
        </div>
        <div class="form-section-row">
          <label>E-Mail<span class="text-red-600">*</span></label>
          <Field
            name="email"
            v-model="usersInfo.email"
            placeholder="E-Mail"
            class="form-input"
          />
          <ErrorMessage name="email" />
        </div>
        <div class="form-section-row">
          <label>Linkedin Account:</label>
          <Field
            name="linkedin"
            v-model="usersInfo.linkedin"
            placeholder="Linkedin Account"
            class="form-input"
          />
          <ErrorMessage name="linkedin" z />
        </div>
        <div class="form-section-row">
          <label>Twitter Account:</label>
          <Field
            name="twitter"
            v-model="usersInfo.twitter"
            placeholder="Twitter Account"
            class="form-input"
          />
          <ErrorMessage name="twitter" />
        </div>
        <div class="form-section-row">
          <label>GitHub Account:</label>
          <Field
            name="github"
            v-model="usersInfo.github"
            placeholder="GitHub Account"
            class="form-input"
          />
          <ErrorMessage name="github" />
        </div>
        <div class="form-section-row">
          <label>Thumbnail Link:<span class="text-red-600">*</span></label>
          <Field
            name="thumbnail"
            v-model="usersInfo.thumbnail"
            placeholder="Thumbnail Link"
            class="form-input"
          />
          <ErrorMessage name="thumbnail" />
        </div>

        <button class="submit-btn">Submit</button>
      </Form>
    </div>
  </div>
</template>

<style scoped></style>
