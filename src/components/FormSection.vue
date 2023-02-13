<script setup>
import axios from "axios";

import { useList } from "./useList";

import { ref } from "vue";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const { getUser } = useList();

const formRef = ref();

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

async function onSubmit(values) {
  await axios.post("/users.json", {
    date: new Date(),
    ...values,
  });

  getUser();

  formRef.value.resetForm();

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
        ref="formRef"
        :validation-schema="FormValidationSchema"
      >
        <div class="form-section-row">
          <label>Name:<span class="text-red-600">*</span></label>
          <Field name="name" placeholder="Name" class="form-input" />
          <ErrorMessage name="name" />
        </div>

        <div class="form-section-row">
          <label>Surname:<span class="text-red-600">*</span></label>
          <Field name="surname" placeholder="Surname" class="form-input" />
          <ErrorMessage name="surname" />
        </div>

        <div class="form-section-row">
          <label>Age:<span class="text-red-600">*</span></label>
          <Field name="age" placeholder="Age" class="form-input" />
          <ErrorMessage name="age" />
        </div>

        <div class="form-section-row">
          <label>Title:<span class="text-red-600">*</span></label>
          <Field name="title" placeholder="Title" class="form-input" />
          <ErrorMessage name="title" />
        </div>

        <div class="form-section-row">
          <label>Company:</label>
          <Field name="company" placeholder="Company" class="form-input" />
          <ErrorMessage name="company" />
        </div>

        <div class="form-section-row">
          <label>Email:<span class="text-red-600">*</span></label>
          <Field name="email" placeholder="Email" class="form-input" />
          <ErrorMessage name="email" />
        </div>

        <div class="form-section-row">
          <label>LinkedIn Account:</label>
          <Field
            name="linkedin"
            placeholder="LinkedIn Account"
            class="form-input"
          />
          <ErrorMessage name="linkedin" />
        </div>

        <div class="form-section-row">
          <label>Twitter Account:</label>
          <Field
            name="twitter"
            placeholder="Twitter Account"
            class="form-input"
          />
          <ErrorMessage name="twitter" />
        </div>

        <div class="form-section-row">
          <label>Github Account:</label>
          <Field
            name="github"
            placeholder="Github Account"
            class="form-input"
          />
          <ErrorMessage name="github" />
        </div>

        <div class="form-section-row">
          <label>Thumbnail:<span class="text-red-600">*</span></label>
          <Field name="thumbnail" placeholder="Thumbnail" class="form-input" />
          <ErrorMessage name="thumbnail" />
        </div>

        <button class="submit-btn">Submit</button>
      </Form>
    </div>
  </div>
</template>

<style scoped></style>
