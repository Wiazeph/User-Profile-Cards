<script setup>
import axios from "axios";

import { useList } from "./useList";

import { ref } from "vue";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const { getUser } = useList();

const formRef = ref();

// Custom error messages
yup.setLocale({
  mixed: {
    required: "This field is required.",
  },
  string: {
    email: "'E-Mail' must be a valid.",
    url: "'Thumbnail' must be a valid img URL.",
  },
  number: {
    positive: "'Age' must be a positive number.",
  },
});

let FormValidationSchema = yup.object({
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
          <div class="row-top"></div>
          <div class="row-top">
            <label>Name:<span class="text-red-600">*</span></label>
            <ErrorMessage name="name" class="error-message" />
          </div>

          <Field name="name" placeholder="Name" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Surname:<span class="text-red-600">*</span></label>
            <ErrorMessage name="surname" class="error-message" />
          </div>

          <Field name="surname" placeholder="Surname" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Age:<span class="text-red-600">*</span></label>
            <ErrorMessage name="age" class="error-message" />
          </div>

          <Field name="age" placeholder="Age" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Title:<span class="text-red-600">*</span></label>
            <ErrorMessage name="title" class="error-message" />
          </div>

          <Field name="title" placeholder="Title" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Company:</label>
            <ErrorMessage name="company" class="error-message" />
          </div>

          <Field name="company" placeholder="Company" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>E-Mail:<span class="text-red-600">*</span></label>
            <ErrorMessage name="email" class="error-message" />
          </div>

          <Field name="email" placeholder="E-Mail" class="form-input" />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>LinkedIn Account:</label>
            <ErrorMessage name="linkedin" class="error-message" />
          </div>

          <Field
            name="linkedin"
            placeholder="LinkedIn Account"
            class="form-input"
          />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Twitter Account:</label>
            <ErrorMessage name="twitter" class="error-message" />
          </div>

          <Field
            name="twitter"
            placeholder="Twitter Account"
            class="form-input"
          />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>GitHub Account:</label>
            <ErrorMessage name="github" class="error-message" />
          </div>

          <Field
            name="github"
            placeholder="GitHub Account"
            class="form-input"
          />
        </div>

        <div class="form-section-row">
          <div class="row-top">
            <label>Thumbnail:<span class="text-red-600">*</span></label>
            <ErrorMessage name="thumbnail" class="error-message" />
          </div>

          <Field name="thumbnail" placeholder="Thumbnail" class="form-input" />
        </div>

        <div class="form-buttons">
          <button class="btn submit-btn">Submit</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped></style>
