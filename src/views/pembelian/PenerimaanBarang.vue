<template>
  <div class="penerimaan-barang">
    <Navbar />
    <TabHeader />
    <ComptPenerimaanBarang />
    <NavDock />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import ComptPenerimaanBarang from '@/components/pembelian/ComptPenerimaanBarang.vue';
import NavDock from '@/components/NavDock.vue';

export default {
  name: 'PesananPembelian',
  components: {
    Navbar,
    TabHeader,
    ComptPenerimaanBarang,
    NavDock
  }
}
</script>
