<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <nav>
      <Navbar />
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
