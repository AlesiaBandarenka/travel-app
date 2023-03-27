<template>
  <div class="wrapper">
    <AppHeader />
  <SortBar :quantity="sortedMovies.length" />
    <div class="wrapper-list">
      <MovieCardsList v-if="sortedMovies.length" :movies="sortedMovies"/>
      <NoFound v-else />
    </div>
  <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SortBar from '@/components/SortBar.vue';
import NoFound from '@/components/NoFound.vue';
import MovieCardsList from '@/components/MovieCardsList.vue';

import { computed, onMounted } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from 'vuex';

const store = useStore();

const sortByValue = computed(() => store.state.movies.sortByValue);

onMounted(() => {
  store.dispatch('movies/fetchPhotos');
});

const filteredBy = (arr) => {
  switch (sortByValue.value) {
    case 'type1':
      return arr.filter((photo) => photo.city.toLowerCase() === 'лодзь');
    case 'type2':
      return arr.filter((photo) => photo.city.toLowerCase() === 'торунь');
    case 'type3':
      return arr.filter((photo) => photo.city.toLowerCase() === 'гдыня');
    default:
      return arr;
  }
};

const movies = computed(() => store.state.movies.all);

const sortedMovies = computed(() => filteredBy(movies.value));

</script>

<style scoped>
.wrapper {
  position: relative;
  min-height: 100%;
}
.wrapper-list {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
