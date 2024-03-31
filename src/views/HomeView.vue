<script setup></script>

<template>
  <div class="container">
    <div class="card text-center mt-5">
      <!-- <div class="card-header">fictional cafe</div> -->
      <div class="card-body">
        <h3 class="card-title">Welcome to Cafe Fictional!</h3>
        <p class="card-text">
          Go to the menu to see the available dishes we have!
        </p>
      </div>
      <div
        class="card-footer text-muted"
        style="border: none; background: none"
      >
        <router-link :to="{ name: 'menu' }" class="btn btn-primary"
          >Go to Menu</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
