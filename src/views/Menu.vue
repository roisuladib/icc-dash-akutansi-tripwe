<template>
  <div class="alat-bantu">
    <Navbar />
    <h1 class="text-center mt-5">Halaman Menu</h1>
    <div class="text-center">
      <img src="../assets/images/ilus_tripwe.svg" width="55%" class="mt-5" alt="Tripwe Jurnal">
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Menu',
  components: {
    Navbar
  },
  created() {
    document.title = 'Tripwe jurnal | Menu'
  }
}
</script>