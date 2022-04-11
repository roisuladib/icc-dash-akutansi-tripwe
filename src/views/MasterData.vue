<template>
  <div class="master-data">
    <Navbar />
    <h1 class="text-center mt-5">Halaman Master Data</h1>
    <div class="text-center">
      <img src="../assets/images/ilus_tripwe_1.svg" width="46%" class="mt-5" alt="Tripwe Jurnal">
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'MasterData',
  components: {
    Navbar,
  },
  created() {
    document.title = 'Tripwe jurnal | Data master'
  }
}
</script>