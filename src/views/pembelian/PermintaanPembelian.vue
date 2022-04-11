<template>
  <div class="permintaan-pembelian">
    <Navbar />
    <TabHeader />
    <ComptPermintaanPembelian />
    <NavDock />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import ComptPermintaanPembelian from '@/components/pembelian/ComptPermintaanPembelian.vue';
import NavDock from '@/components/NavDock.vue';

export default {
  name: 'PermintaanPembelian',
  components: {
    Navbar,
    TabHeader,
    ComptPermintaanPembelian,
    NavDock
  }
}
</script>
