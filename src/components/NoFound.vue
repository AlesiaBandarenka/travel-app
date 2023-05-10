<template>
  <div data-test="no-found">
    <p>Фото не найдены</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  font-size: 55px;
}
@media screen and (max-width: 350px) {
  div {
    width: 250px;
    height: 300px;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
