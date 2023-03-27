<template>
  <button data-test="button" type="button" class="btn-search">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgb(246, 82, 81);
  margin-left: 30px;
  width: 17%;
  height: 44px;
}
</style>
