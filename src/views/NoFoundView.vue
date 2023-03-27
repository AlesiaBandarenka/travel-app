<template>
  <div class="wrapper">
    <div class="background-wrapper">
    <AppHeader />
  </div>
  <NoFound />
  <div class="wrapper-text">
    Try start from <RouterLink :to="{ name: 'Home' }">Main page</RouterLink>
  </div>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import NoFound from '@/components/NoFound.vue';
</script>

<style scoped>
.background-wrapper {
  position: relative;
  background-image: url('@/assets/background.png');
  background-size: cover;
  background-color: rgba(0,0,0,0.25);
}
.wrapper {
  position: relative;
  min-height: 100%;
}
.wrapper-text {
  text-align: center;
  font-size: 50px;
}
a {
  text-decoration: none;
  color: #e7e4d5;
}
</style>
