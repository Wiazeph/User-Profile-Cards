import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

axios.defaults.baseURL =
  "https://using-fbdb-restapi-with-axios.firebaseio.com/";

import "./assets/style.css";

createApp(App).mount("#app");
