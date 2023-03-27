<template>
  <div class="background-wrapper">
    <AppHeader />
    <DetailedMovieCard v-if="movie" :id="movie.id"
              :title="movie.title"
              :genres="movie.genres"
              :year="movie.year"
              :alt="movie.title"
              :posterurl="movie.posterurl"
              :contentRating="movie.contentRating"
              :duration="movie.duration"
              :storyline="movie.storyline"/>
    <div v-else>
      Wait a minute, please...
    </div>
  </div>
  <SortBar />
    <div class="wrapper"><MovieCardsList :movies="movies"/></div>
  <AppFooter />
</template>

<script setup>
import MovieCardsList from '@/components/MovieCardsList.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SortBar from '@/components/SortBar.vue';
import DetailedMovieCard from '@/components/DetailedMovieCard.vue';
import { computed, onBeforeMount } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

onBeforeMount(async () => {
  await store.dispatch('movies/fetchMovies');
});

const paramId = computed(() => route?.params?.id);

const movies = computed(() => store.state.movies.all);
const movie = computed(() => movies.value.find((item) => item.id.toString() === paramId.value));

</script>

<style scoped>
.background-wrapper {
  position: relative;
  background-image: url('@/assets/background.png');
  background-size: cover;
  background-color: rgba(0,0,0,0.25);
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
