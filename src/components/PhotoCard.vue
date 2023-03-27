<template>
  <li key="id" class="item" data-test="test-photo-card">
    <article class="item-wrapper">
        <img
            v-lazy
            src="../assets/NoImage.png"
            :data-src="photoSrc"
            :alt="title"
            width="240"
            height="340"
            @error="imageErrorHandler"
          />
          <div class="item-description">
              <h3 class="item-title" data-test="test-photo-title">{{ title }}</h3>
            <div class="item-year-city"
            data-test="test-photo-year">
              <p>{{ date }}</p>
              <p>{{ city }}</p>
            </div>
          </div>
            <p class="item-genre" data-test="test-photo-genres">{{ description }}</p>
        </article>
    </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import NoImage from '@/assets/NoImage.png';

export interface IPhoto {
  id: number,
  title: string,
  posterurl?: string,
  date?: string,
  city?: string,
  description?: string,
}

const props = defineProps<IPhoto>();

// eslint-disable-next-line import/no-dynamic-require, global-require
const photoSrc = computed(() => require(`@/assets/${props.posterurl}`));

const imageErrorHandler = (e: Event) => {
  const target = e.target as HTMLImageElement;
  target.src = NoImage;
};

</script>

<style scoped>

.item {
  width: 250px;
  margin: 30px;
}
.item-wrapper {
  padding: 5px;
}
h3 {
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
}
a {
  text-decoration: none;
  color: #ffffff;
}
p {
  margin: 0;
  font-size: 12px;
  line-height: 15px;
}
li {
    margin-top: 10px;
}
.item-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-year-city {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 3px;
  padding: 4px;
  margin-left: 3px;
  text-align: center;
}
@media screen and (max-width: 350px) {
  .item {
    margin: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
  }
}
</style>
