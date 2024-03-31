import { ref } from "vue";
import { defineStore } from "pinia";

export const useFishStore = defineStore("menus", () => {
  const menus = ref([
    {
      id: 1,
      item: "Fish Fry",
      price: 10,
    },
    {
      id: 2,
      item: "Fish Curry",
      price: 15,
    },
    {
      id: 3,
      item: "Fish Tawaa",
      price: 20,
    },
    {
      id: 4,
      item: "Fish With Mango",
      price: 35,
    },
    {
      id: 5,
      item: "Fish n Chips",
      price: 8,
    },
    {
      id: 6,
      item: "Shef's Special",
      price: 25,
    },
  ]);

  return { menus };
});
