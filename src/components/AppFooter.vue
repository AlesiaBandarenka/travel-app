<template>
  <footer data-test="footer">
    <RouterLink :to="{ name: 'Home' }">
      <div><span class="logo-text">Family Vacation</span></div>
    </RouterLink>
  </footer>
</template>

<style scoped>
footer {
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: rgb(183, 224, 210);
  width: 100%;
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
  div {
    margin: 0 auto;
  }
}
</style>
