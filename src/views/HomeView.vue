<template>
  <div class="wrapper">
    <AppHeader />
  <SortBar :quantity="sortedPhotos.length" />
    <div class="wrapper-list">
      <PhotoCardsList v-if="sortedPhotos.length" :photos="sortedPhotos"/>
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
import PhotoCardsList from '@/components/PhotoCardsList.vue';

import { computed, onMounted } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from 'vuex';

const store = useStore();

const sortByValue = computed(() => store.state.photos.sortByValue);

onMounted(() => {
  store.dispatch('photos/fetchPhotos');
});

const filteredBy = (arr) => {
  switch (sortByValue.value) {
    case 'type1':
      return arr.filter((photo) => photo.city.toLowerCase() === 'лодзь');
    case 'type2':
      return arr.filter((photo) => photo.city.toLowerCase() === 'торунь');
    case 'type3':
      return arr.filter((photo) => photo.city.toLowerCase() === 'гдыня');
    case 'type4':
      return arr.filter((photo) => photo.city.toLowerCase() === 'гданьск');
    case 'type5':
      return arr.filter((photo) => photo.city.toLowerCase() === 'грудзендз');
    default:
      return arr;
  }
};

const photos = computed(() => store.state.photos.all);

const sortedPhotos = computed(() => filteredBy(photos.value));

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
