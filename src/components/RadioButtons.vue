<template>
  <div>
    <button v-for="text,localValue in items" :key="text"
            type="button" class="btn-secondary"
            data-test="radio-buttons"
            :class="localValue == value ? 'active' : ''"
            @click="$emit('changed', localValue)">
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface IButton {
  items: { [key: string]: string; },
  value: string,
}
defineProps<IButton>();

defineEmits<{(n: 'changed', value: string): void}>();

</script>

<style scoped>
button {
  background-color: rgba(85, 85, 85, 0.75);
  border: 1px solid rgba(85, 85, 85, 0.75);
  color: rgb(255, 255, 255);
  height: 30px;
  border-radius: 5px;
  padding: 7px;
}
.active {
  background-color: rgb(212, 57, 209);
}
@media screen and (max-width: 350px) {
  div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  button {
    height: 25px;
    padding: 5px;
  }
}
</style>
