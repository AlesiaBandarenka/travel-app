<template>
    <ul class="item-list">
            <PhotoCard
              v-for="photo in props.photos"
              :key="photo.id"
              :id="photo.id"
              :title="photo.title"
              :date="photo.date"
              :alt="photo.title"
              :posterurl="photo.posterurl"
              :description="photo.description"
              :city="photo.city"
              data-test="test-photo-card-list"/>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import PhotoCard from './PhotoCard.vue';

interface IPhoto {
  date?: string,
  posterurl?: string,
  id: number,
  title: string,
  description?: string,
  city?: string,
}
interface PhotosProps {
  photos: Array<IPhoto>
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
