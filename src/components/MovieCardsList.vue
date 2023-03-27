<template>
    <ul class="item-list">
            <MovieCard
              v-for="movie in props.movies"
              :key="movie.id"
              :id="movie.id"
              :title="movie.title"
              :date="movie.date"
              :alt="movie.title"
              :posterurl="movie.posterurl"
              :description="movie.description"
              :city="movie.city"
              data-test="test-movie-card-list"/>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import MovieCard from './MovieCard.vue';

interface IPhoto {
  date?: string,
  posterurl?: string,
  id: number,
  title: string,
  description?: string,
  city?: string,
}
interface PhotosProps {
  movies: Array<IPhoto>
}

const props = defineProps<PhotosProps>();

</script>

<style scoped>
ul {
  margin: 0 auto;
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  font-family: 'Sree Krushnadevaraya', 'Times New Roman', Times, serif;
}
</style>
