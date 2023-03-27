<template>
        <article class="main-card" data-test="test-main-card">
          <div class="main-card__image">
            <img
              class="main-card__image-small"
              :src="posterurl"
              :alt="title"
            />
          </div>
          <div class="main-card__description">
            <div class="title-rate">
              <div class="title-rate__title" data-test="test-main-card-title">{{ title }}</div>
              <div class="title-rate__rate"
                  data-test="test-main-card-rating">{{ contentRating }}</div>
            </div>
            <div class="year-duration">
              <div class="year" data-test="test-main-card-year">
                <p>{{ year }}</p>
              </div>
            </div>
            <div class="description">{{ storyline }}</div>
          </div>
        </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface IDetailedCard {
  id: number,
  title: string,
  posterurl?: string,
  year?: string,
  genres: string[],
  contentRating?: string,
  duration: string,
  storyline?: string,
}

defineProps<IDetailedCard>();

</script>

<style scoped>

.main-card {
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 350px;
  margin: 0 auto;
  padding: 30px;
  border: 3px solid #F65261;
  background-color:  #353232;
  border-radius: 10px;
}
.main-card__image {
  margin: 10px;
}
.main-card__image-small {
  width: 230px;
  height: 330px;
}
.main-card__description {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 600px;
  padding: 10px;

}
.title-rate {
  display: flex;
}
.title-rate__title {
  font-size: 32px;
}
.title-rate__rate {
  font-size: 20px;
  color: green;
  padding: 5px;
  width: 23px;
  margin-left: 20px;
  border-radius: 50%;
  border: 1px solid #ffffff;
}
.genre {
  font-size: 12px;
  margin-top: 10px;
}
.year-duration {
  display: flex;
  font-size: 20px;
  color: #F65261;
  margin-top: 10px;
}
.year {
  margin-right: 20px;
}
.description {
  font-size: 12px;
  margin-top: 10px;
}
</style>
