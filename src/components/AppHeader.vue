<template>
  <header data-test="header">
    <RouterLink :to="{ name: 'Home' }">
      <div><span class="logo-text">Family Vacation</span></div>
    </RouterLink>
    <!-- <RouterLink :to="{ name: 'Home' }" style="color:brown; margin-right:50px;">
      <Icon icon="simple-line-icons:magnifier" title="Return to the Main Page"
            style="font-size: 1.5em; font-weight: 700; color: 'rgb(212, 78, 172)'" />
    </RouterLink> -->
  </header>
</template>

<script lang="ts" setup>

</script>

<style scoped>
header {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(183, 224, 210);
}
div {
  margin-left: 40px;
  border-radius: 10px;
  width: 180px;
  border: 3px solid rgb(212, 78, 172);
  text-align: center;
  padding: 5px;
}
.logo-text {
  font-size: 30px;
  text-transform: uppercase;
  color: rgb(212, 78, 172);
}
a {
  text-decoration: none;
}
@media screen and (max-width: 350px) {
  header {
  height: 95px;
  }
  div {
    margin: 0 10px;
  }
}
</style>
