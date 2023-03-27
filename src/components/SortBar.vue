<template>
  <div class="sort">
    <div class="sort-quantity">{{ moviesFound }}</div>
    <div class="sort-buttons">
      <div><span>выбрать город</span></div>
      <RadioButtons :items="buttonTypes"
                      :value="sortByValue"
                      @changed="setSortByValue">
      </RadioButtons>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps,
} from 'vue';
import RadioButtons from '@/components/RadioButtons.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from 'vuex';

const store = useStore();

const buttonTypes = {
  type1: 'Лодзь',
  type2: 'Торунь',
  type3: 'Гдыня',
};

interface INum {
  quantity?: number;
}

const props = defineProps<INum>();

const sortByValue = computed(() => store.state.movies.sortByValue);

const setSortByValue = (str: string) => store.commit('movies/setSortBy', str);

const moviesFound = computed(() => ((props.quantity && props.quantity > 0 && props.quantity !== 122) ? `${props.quantity} фото найдено` : null));

</script>

<style scoped>
.sort {
  height: 80px;
  background-color: rgb(16, 116, 120);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  text-transform: uppercase;
  font-size: 20px;
  margin-right: 20px;
}
.sort-quantity {
  margin-left: 30px;
}
.sort-buttons {
  display: flex;
  margin-right: 30px;
}
@media screen and (max-width: 350px) {
  .sort {
    height: 120px;
  }
  .sort-buttons {
  display: flex;
  margin-right: 5px;
}
span {
  margin-right: -20px;
}
.sort-quantity {
  margin-left: 15px;
}
}
</style>
