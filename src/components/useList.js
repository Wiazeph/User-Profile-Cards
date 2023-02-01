import { ref, onMounted, watch } from "vue";
import axios from "axios";

export function useList() {
  const list = ref([]);
  const hasNewItem = ref(false);

  watch(hasNewItem, (val) => {
    console.log("hasNewItem", val);
    if (val === true) {
      getUser();

      hasNewItem.value = false;
    }
  });

  let usersInfo = ref({
    name: "",
    surname: "",
    age: "",
    thumbnail: "",
  });

  async function onSubmit() {
    const { name, surname, age, thumbnail } = usersInfo.value;

    if (name !== "" && surname !== "" && age !== "" && thumbnail !== "") {
      const response = await axios.post("/users.json", {
        name,
        surname,
        age,
        thumbnail,
        date: new Date(),
      });

      hasNewItem.value = true;
      return response;
    }

    throw new Error("Please fill all the fields");
  }

  const getUser = async () => {
    const response = await axios.get("/users.json");
    if (!response.data) {
      return;
    }

    const responseList = Object.keys(response.data).map((item) => {
      return {
        id: item,
        ...response.data[item],
      };
    });

    list.value = [...responseList];
    console.log(list.value);
  };

  async function deleteUser(lt) {
    const response = await axios.delete(`/users/${lt.id}.json`);

    if (response.status === 200) {
      console.log("Data has been deleted successfully...");
      getUser();
    }
  }

  onMounted(async () => {
    await getUser();
  });
  return { usersInfo, onSubmit, deleteUser, list };
}
