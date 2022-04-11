<template>
  <div class="modul-utama">
    <Navbar />
    <h1 class="text-center mt-5">Halaman Modul Utama</h1>
    <div class="text-center">
      <img src="../assets/images/ilus_tripwe_2.svg" width="46%" class="mt-5" alt="Tripwe Jurnal">
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'ModulUtama',
  components: {
    Navbar
  }
}
</script>