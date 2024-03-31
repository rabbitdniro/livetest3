<script setup>
import { useFishStore } from "../stores/fishstore.js";
import { storeToRefs } from "pinia";

const store = useFishStore();
const { menus } = storeToRefs(store);

function buyButton(id) {
  const menu = menus.value.find((food) => food.id == id);
  alert(`You selected: ${menu.item}`);
}
</script>

<template>
  <div class="container">
    <!-- {{ menus }} -->
    <div class="row justify-content-center mt-5">
      <div class="col-auto">
        <div
          v-for="item in menus"
          :key="item.id"
          class="card mb-3"
          style="width: 18rem"
        >
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body text-center">
            <h5 class="card-title">Dish: {{ item.item }}</h5>
            <p class="card-text">Price: {{ item.price }}</p>
          </div>

          <div
            class="card-footer text-center"
            style="border: none; background: none"
          >
            <button @click="buyButton(item.id)" class="btn btn-primary">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
