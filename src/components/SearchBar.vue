<template>
  <div class="search">
    <h2 data-test="h2-search-bar">find your movie</h2>
      <div class="search-input">
      <label for="inputSearch">
        <input @keypress.enter="store.dispatch('movies/setSearchValue')"
              :value="searchValue"
              type="text"
              name="search"
              placeholder="Search"
              data-test="test-input"
              @input="store.commit('movies/setSearchValue', $event.target.value)"/>
      </label>
      <AppButton @click="store.dispatch('movies/setSearchValue')">
        search
      </AppButton>
      </div>
      <div class="search-buttons">
        <span>search by</span>
        <RadioButtons :items="buttonTypes"
                      :value="searchByValue"
                      data-test="test-radio-buttons"
                      @changed="setSearchByValue($event)">
        </RadioButtons>
      </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AppButton from '@/components/AppButton.vue';
import RadioButtons from '@/components/RadioButtons.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useStore } from 'vuex';

const store = useStore();

const buttonTypes: {[key: string]: string} = {
  type1: 'title',
  type2: 'genre',
};

const searchValue = computed(() => store.state.movies.searchValue);

const searchByValue = computed(() => store.state.movies.searchByValue);

const setSearchByValue = (str: string) => store.commit('movies/setSearchBy', str);

</script>

<style scoped>
.search {
  height: 280px;
  margin-left: 100px;
}

input {
  height: 40px;
  width: 70%;
  background-color: rgba(85, 85, 85, 0.85);
  border: 1px solid rgba(85, 85, 85, 0.85);
  border-radius: 5px;
}
::placeholder {
  padding-left: 20px;
  color: rgb(169, 157, 157);
  font-size: 20px;
}
h2 {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 400;
}
span {
  text-transform: uppercase;
  font-size: 20px;
  margin-right: 20px;
}
.search-buttons {
  display: flex;
  margin-top: 20px;
}
</style>
