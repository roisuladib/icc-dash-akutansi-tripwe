<template>
   <div class="page-not-found">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <router-link :to="{name: 'Home'}" class="text-white home">Home</router-link>
   </div>
</template>

<script>
export default {
   name: 'PageNotFound',
}
</script>

<style scoped>
   .page-not-found {
      text-align: center;
      padding: 15%;
      max-height: 100vh;
      max-width: 100vw;
   }
   .page-not-found h1 {
      text-align: center;
      font-size: 120px;
      color: tomato;
      font-weight: 900;
   }
   .home {
      text-decoration: underline;
       color: tomato !important;
   }
   .home:hover {
       color: #fff !important;
   }
</style>