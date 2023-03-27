<template>
  <div class="background-wrapper">
    <AppHeader />
    <DetailedPhotoCard v-if="photo" :id="photo.id"
              :title="photo.title"
              :genres="photo.genres"
              :year="photo.year"
              :alt="photo.title"
              :posterurl="photo.posterurl"
              :contentRating="photo.contentRating"
              :duration="photo.duration"
              :storyline="photo.storyline"/>
    <div v-else>
      Wait a minute, please...
    </div>
  </div>
  <SortBar />
    <div class="wrapper"><PhotoCardsList :photos="photos"/></div>
  <AppFooter />
</template>

<script setup>
import PhotoCardsList from '@/components/PhotoCardsList.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SortBar from '@/components/SortBar.vue';
import DetailedPhotoCard from '@/components/DetailedPhotoCard.vue';
import { computed, onBeforeMount } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

onBeforeMount(async () => {
  await store.dispatch('photos/fetchPhotos');
});

const paramId = computed(() => route?.params?.id);

const photos = computed(() => store.state.photos.all);
const photo = computed(() => photos.value.find((item) => item.id.toString() === paramId.value));

</script>

<style scoped>
.background-wrapper {
  position: relative;
  background-size: cover;
  background-color: rgba(0,0,0,0.25);
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
