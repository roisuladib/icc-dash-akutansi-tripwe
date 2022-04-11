<template>
   <div class="laporan-penjualan-safari">

      <Navbar />
      <TabHeader />

      <!-- Table -->
      <div id='tripwe-table'>
         <div class='compt-table'>
            <div class='container-fluid'>
               <h1 class='title-alt'>Laporan Penjualan Safari <span class="bage badge-warning px-2 ml-1 rounded">{{ titlePeriode }}</span></h1>
            </div>
            <div class='table-responsive'>
               <table class='table table-hover table-bordered'>
                  <thead>
                     <tr>
                        <td width="3%">No</td>
                        <td width="92%">Nama Laporan</td>
                        <td width="5%">Cetak</td>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="data in rentals" :key="data.no">
                        <td>{{ data.no }}.</td>
                        <td>{{ data.name }}</td>
                        <td class="text-center">
                           <svg @click="modalPrint(data.name)" xmlns="http://www.w3.org/2000/svg" class="ic_print_laporan" width="23" height="23" viewBox="0 0 512 512">
                              <title>Print {{ data.name }}</title>
                              <path d="M408,112H106a58,58,0,0,0-58,58V328a56,56,0,0,0,56,56h8v39.68A40.32,40.32,0,0,0,152.32,464H359.68A40.32,40.32,0,0,0,400,423.68V384h8a56,56,0,0,0,56-56V168A56,56,0,0,0,408,112ZM368,423.68a8.35,8.35,0,0,1-8.32,8.32H152.32a8.35,8.35,0,0,1-8.32-8.32V264.32a8.35,8.35,0,0,1,8.32-8.32H359.68a8.35,8.35,0,0,1,8.32,8.32ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z" />
                              <path d="M344,48H168a56.09,56.09,0,0,0-55.42,48H399.42A56.09,56.09,0,0,0,344,48Z" />
                           </svg>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      <div v-if="openModal" id="modalFilter">
         <transition name="modal">
            <div class="modal-mask">
               <div class="modal-wrapper">
                  <div class="modal-dialog modal-sm">
                     <div class="modal-content">
                        <div class="modal-header">
                           <slot name="header">
                              <h3>Filter</h3>
                              <button type="button" class="close pl-0" @click="close"><span aria-hidden="true">&times;</span></button>
                           </slot>
                        </div>
                        <div class="modal-body">
                           <slot name="body">
                              <div class="form-group">
                                 <label>Periode</label>
                                 <span id="month">
                                    <VueDatePicker no-calendar-icon fullscreen-mobile :color="color" type="month" no-header v-model="periode" @input="replace" />
                                 </span>
                              </div>
                              <div class="form-group">
                                 <label for="by">Berdasarkan</label>
                                 <select id="by" class="form-control custom-select" v-if="fields.length > 0" v-model="select1">
                                    <option v-for="data in fields" :key="data" :value="data">{{ data }}</option>
                                 </select>
                                 <select id="by" class="form-control custom-select" v-else >
                                    <option selected disabled>~ Data Kosong ~</option>
                                 </select>
                              </div>
                              <div class="form-group">
                                 <label for="by">Kondisi</label>
                                 <select id="by" class="form-control custom-select" v-model="select2">
                                    <option selected disabled>~ Pilih Kondisi ~</option>
                                    <option value="Sama Dengan">Sama Dengan</option>
                                    <option value="Tidak Sama">Tidak Sama</option>
                                    <option value="Lebih Dari">Lebih Dari</option>
                                    <option value="Kurang Dari">Kurang Dari</option>
                                    <option value="Lebih Dari Sama Dengan">Lebih Dari Sama Dengan</option>
                                    <option value="Kurang Dari Sama Dengan">Kurang Dari Sama Dengan</option>
                                 </select>
                              </div>
                              <div class="form-group">
                                 <label>Deskripsi</label>
                                 <input type="text" class="form-control" v-model="deskripsi" @keypress="print" />
                              </div>
                              <button @click="print" class="btn btn-ijo-alt btn-block mt-4" id="print">
                                 <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                                 Print
                              </button>
                           </slot>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </transition>
      </div>

   </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import axios from 'axios';
import qs from 'qs';

export default {
   name:'LaporanPenjualanSafari',
   components: {
      Navbar,
      TabHeader
   },
   data() {
      return {
         rentals: [
            { no: '1', name: 'Penjualan Safari Per Nota'},
            { no: '2', name: 'Penjualan Safari Per Customer'},
            { no: '3', name: 'Penjualan Safari Per Tanggal'},
            { no: '4', name: 'Penjualan Safari Per Paket'},
            { no: '5', name: 'Penjualan Safari Per Customer & Nota'},
            { no: '6', name: 'Penjualan Safari Per Tanggal & Nota'},
            { no: '7', name: 'Penjualan Safari Per Customer & Paket'},
            { no: '8', name: 'Penjualan Safari Per Paket & Customer'},
            { no: '9', name: 'Penjualan Safari Per Tanggal & Paket'},
            { no: '10', name: 'Penjualan Safari Per Nota & Paket'},
            { no: '11', name: 'Penjualan Safari Per Customer, Nota & Paket'},
            { no: '12', name: 'Penjualan Safari Per Tanggal, Nota & Paket'},
         ],
         fields: [],
         select1: '',
         select2: '',
         openModal: false,
         loading: false,
         periode: new Date().toISOString().slice(0, 7),
         jenis: '',
         deskripsi: '',
         kondisi: '',
         color: '#1f7882'
      }
   },
   methods: {
      async modalPrint(id) {
         this.openModal = true;
         this.jenis = id;
         const key = JSON.parse(sessionStorage.getItem('userLogin'));
         await axios
            .post('https://api.saebo.id/trip/laporanpenjualan/daftarfieldpenjualansafari', qs.stringify({
               idlog: key.idlog,
               user: key.userkey,
               token: key.token,
               jenis: this.jenis
            }))
            .then(res => {
               if (res.data.status === 102) {
                  this.fields = res.data.data;
               }
               else {
                  return this.$toasted.error( res.data.message, {
                     theme: 'bubble',
                     duration: '3000',
                  });
               }
            })
            .catch(err => console.log(err))
      },
      async print() {
         this.loading = true;
         document.querySelector('#print').disabled = true;
          const key = JSON.parse(sessionStorage.getItem('userLogin'));
            await axios
            .post('https://api.saebo.id/trip/laporanpenjualan/requestsafari', qs.stringify({
               idlog: key.idlog,
               user: key.userkey,
               token: key.token,
               jenis: this.jenis,
               aksi: 'PDF',
               periode: this.periode.replace('-', ''),
               pfilter1: 'SEMUA',
               pfilter2: this.select1,
               pfilter3: this.select2,
               pfilter4: this.deskripsi,
            }))
            .then(res => {
               if (res.data.status === 102) {
                  this.select1 = '';
                  this.select2 = '';
                  this.deskripsi = '';
                  const w = 800,
                        h = 500,
                        l = Number((screen.width/2)-(w/2)),
                        t = Number((screen.height/2)-(h/2)),
                        p = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=${w},height=${h},left=${l},top=${t}`;
                  open(`https://api.saebo.id/trip/printpreviewlappenjualan/cetaksafari/${res.data.data}`, '', p).document.title = this.jenis;
               }
               else {
                  this.$fire({
                     title: res.data.message,
                     type: 'error',
                     confirmButtonText: 'Coba lagi',
                     position: 'top',
                     customClass: {
                        container: 'alert-index',
                     }
                  })
               }
               this.loading = false;
               document.querySelector('#print').disabled = false;
            })
            .catch(err => {
               console.log(err);
            })
      },
      close() {
         this.openModal = false;
         this.select1 = '';
         this.select2 = '';
         this.deskripsi = '';
         this.periode = new Date().toISOString().slice(0, 7);
      }
   },
   created() {
      const date = new Date().toISOString().slice(0, 7);
      this.titlePeriode = date;
      document.title = 'Tripwe Jurnal | Laporan Pesana Safari';
   }
}
</script>

<style scoped>
   .title-alt {
      margin-top: 20px !important;
      text-align: center;
      color: var(--white);
      font-size: 15px;
      font-weight: 500;
      margin: 0;
   }
   .badge-warning {
      background-color: #ffd22f;
   }
   .ic_print_laporan path {
      fill: #1f7882;
   }
   .ic_print_laporan path:hover {
      fill: #19636c;
   }
</style>