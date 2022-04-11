<template>
   <div class="go-back">
      <button @click="goBack">Back</button>
   </div>
</template>

<script>
export default {
   name: 'GoBack',
   methods: {
      goBack() {
         return this.$router.go(-1);
      }
   }
}
</script>