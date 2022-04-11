<template>
  <div class="pesanan-pembelian">
    <Navbar />
    <TabHeader />
    <ComptPesananPembelian />
    <NavDock />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import ComptPesananPembelian from '@/components/pembelian/ComptPesananPembelian.vue';
import NavDock from '@/components/NavDock.vue';

export default {
  name: 'PesananPembelian',
  components: {
    Navbar,
    TabHeader,
    ComptPesananPembelian,
    NavDock
  }
}
</script>
