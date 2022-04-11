import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import LaporanPesananRental from '../views/laporan/pesanan/Rental.vue'
import LaporanPesananSafari from '../views/laporan/pesanan/Safari.vue'
import LaporanPesananOnroad from '../views/laporan/pesanan/Onroad.vue'
import LaporanPesananOffroad from '../views/laporan/pesanan/Offroad.vue'

import LaporanPenjualanRental from '../views/laporan/penjualan/Rental.vue'
import LaporanPenjualanSafari from '../views/laporan/penjualan/Safari.vue'
import LaporanPenjualanOnroad from '../views/laporan/penjualan/Onroad.vue'
import LaporanPenjualanOffroad from '../views/laporan/penjualan/Offroad.vue'

import LaporanKeuangan from '../views/laporan/keuangan/Keuangan.vue'

import PesananPembelian from '../views/pembelian/PesananPembelian.vue'
import PenerimaanBarang from '../views/pembelian/PenerimaanBarang.vue'

import Bank from '../views/Bank.vue'

import Merchant from '../views/Merchant.vue'

import Pelanggan from '../views/Pelanggan.vue'

import PesananRental from '../views/pesanan/PesananRental.vue'
import PesananSafari from '../views/pesanan/PesananSafari.vue'
import PesananOnroad from '../views/pesanan/PesananOnroad.vue'
import PesananOffroad from '../views/pesanan/PesananOffroad.vue'
import SemuaPesanan from '../views/pesanan/SemuaPesanan.vue'

import PenjualanRental from '../views/penjualan/PenjualanRental.vue'
import PenjualanSafari from '../views/penjualan/PenjualanSafari.vue'
import PenjualanOnroad from '../views/penjualan/PenjualanOnroad.vue'
import PenjualanOffroad from '../views/penjualan/PenjualanOffroad.vue'

import Kas from '../views/kas/Kas.vue'
import KasKeluar from '../views/kas/Keluar.vue'
import KasMasuk from '../views/kas/Masuk.vue'

import JurnalUmum from '../views/jurnal/Umum.vue'
import JurnalPenyesuain from '../views/jurnal/Penyesuaian.vue'

import Perkiraan from '../views/Perkiraan.vue'
import Forbidden from '../views/switch/Forbidden.vue'
import PageNotFound from '../views/switch/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // Bank
  {
    path: '/bank', 
    name: 'Bank',
    component: Bank
  },

  // Pelanggan
  {
    path: '/pelanggan', 
    name: 'Pelanggan',
    component: Pelanggan
  },

  // Merchant
  {
    path: '/cabang', 
    name: 'Merchant',
    component: Merchant
  },

  // Pesanan
  {
    path: '/pesanan-rental', 
    name: 'PesananRental',
    component: PesananRental
  },
  {
    path: '/pesanan-safari', 
    name: 'PesananSafari',
    component: PesananSafari
  },
  {
    path: '/pesanan-onroad', 
    name: 'PesananOnroad',
    component: PesananOnroad
  },
  {
    path: '/pesanan-offroad', 
    name: 'PesananOffroad',
    component: PesananOffroad
  },
  {
    path: '/semua-pesanan', 
    name: 'SemuaPesanan',
    component: SemuaPesanan
  },

  // penjualan 
  {
    path: '/penjualan-rental', 
    name: 'PenjualanRental',
    component: PenjualanRental
  },
  {
    path: '/penjualan-safari', 
    name: 'PenjualanSafari',
    component: PenjualanSafari
  },
  {
    path: '/penjualan-onroad', 
    name: 'PenjualanOnroad',
    component: PenjualanOnroad
  },
  {
    path: '/penjualan-offroad', 
    name: 'PenjualanOffroad',
    component: PenjualanOffroad
  },

  // KAS
  {
    path: '/kas', 
    name: 'Kas',
    component: Kas
  },
  {
    path: '/kas-keluar', 
    name: 'KasKeluar',
    component: KasKeluar
  },
  {
    path: '/kas-masuk', 
    name: 'KasMasuk',
    component: KasMasuk
  },

  {
    path: '/pesanan-pembelian', 
    name: 'PesananPembelian',
    component: PesananPembelian
  },
  {
    path: '/penerimaan-barang', 
    name: 'PenerimaanBarang',
    component: PenerimaanBarang
  },
  
  {
    path: '/perkiraan', 
    name: 'Perkiraan',
    component: Perkiraan
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/master-data',
    name: 'MasterData',
    component: () => import('../views/MasterData.vue')
  },

  // Jurnal Umum
  {
    path: '/jurnals',
    name: 'Jurnal',
    component: () => import('../views/jurnal/Jurnal.vue')
  },
  {
    path: '/jurnal-umum', 
    name: 'JurnalUmum',
    component: JurnalUmum
  },
  {
    path: '/jurnal-penyesuaian', 
    name: 'JurnalPenyesuain',
    component: JurnalPenyesuain
  },

  {
    path: '/import-transaksi',
    name: 'ImportTransaksi',
    component: () => import('../views/ImportTransaksi.vue')
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: () => import('../views/laporan/Laporan.vue')
  },
  {
    path: '/laporan-pesanan-rental',
    name: 'LaporanPesananRental',
    component: LaporanPesananRental
  },
  {
    path: '/laporan-pesanan-safari',
    name: 'LaporanPesananSafari',
    component: LaporanPesananSafari
  },
  {
    path: '/laporan-pesanan-onroad',
    name: 'LaporanPesananOnroad',
    component: LaporanPesananOnroad
  },
  {
    path: '/laporan-pesanan-offroad',
    name: 'LaporanPesananOffroad',
    component: LaporanPesananOffroad
  },
  {
    path: '/laporan-penjualan-rental',
    name: 'LaporanPenjualanRental',
    component: LaporanPenjualanRental
  },
  {
    path: '/laporan-penjualan-safari',
    name: 'LaporanPenjualanSafari',
    component: LaporanPenjualanSafari
  },
  {
    path: '/laporan-penjualan-onroad',
    name: 'LaporanPenjualanOnroad',
    component: LaporanPenjualanOnroad
  },
  {
    path: '/laporan-penjualan-offroad',
    name: 'LaporanPenjualanOffroad',
    component: LaporanPenjualanOffroad
  },
  {
    path: '/laporan-keuangan',
    name: 'LaporanKeuangan',
    component: LaporanKeuangan
  },


  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/setting/Index.vue')
  },
  {
    path: '/setting-pos',
    name: 'SettingPos',
    component: () => import('../views/setting/Setting.vue')
  },
  {
    path: '/setting-akun',
    name: 'SettingAkun',
    component: () => import('../views/setting/Akun.vue')
  },
  {
    path: '/503',
    name: 'Forbidden',
    component: Forbidden,
  },
  {
    path: '404',
    alias: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '/secret',
    name: 'Secret',
    component: () => import('../views/switch/Secret.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import('../views/switch/Read.vue'),
    meta: {
      auth: true,
      permission: 'read-page',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
   const auth = sessionStorage.getItem('userLogin');
   if (to.name !== 'Login' && !auth) 
      next({ name: 'Login' });
   else if (to.name === 'Login' && auth)
      next({ name: 'Home' });
   else next();
    console.log(from);
});

export default router