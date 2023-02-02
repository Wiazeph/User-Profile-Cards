import axios from "axios";

import { ref, onMounted } from "vue";

export function useList() {
  const list = ref([]);

  async function getUser() {
    const response = await axios.get("/users.json");

    const responseList = Object.keys(response.data).map((key) => {
      return {
        id: key,
        ...response.data[key],
      };
    });

    list.value = [...responseList];
    console.log(responseList);
  }

  onMounted(async () => {
    await getUser();
  });
  return { getUser, list };
}
