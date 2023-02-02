import axios from "axios";

import { ref, onMounted } from "vue";

const list = ref([]);

export function useList() {
  async function getUser() {
    const response = await axios.get("/users.json");

    const responseList = Object.keys(response.data).map((key) => {
      return {
        id: key,
        ...response.data[key],
      };
    });

    list.value = [...responseList];
  }

  onMounted(async () => {
    await getUser();
  });
  return { getUser, list };
}
