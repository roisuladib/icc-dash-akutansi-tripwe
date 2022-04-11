<template>
  <div class="penjualan-safari">
    <Navbar />
    <TabHeader />

   <div id="tripwe-table">
      <div class="compt-table">
         <div class="container-fluid">
            <h1 class="title">Daftar Penjualan Safari</h1>
            <div class="row mt-4">
               <div class="col-12 col-xl-3">
                  <div class="form-inline form-tabel">
                     <label>Pesanan</label>
                     <div class="input-group">
                        <input type="text" v-model="noPesanan" @input="getAll" class="form-control" placeholder="No. Bukti" />
                        <button type="submit" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-xl-3">
                  <div class="form-inline form-tabel">
                     <label>Pelanggan</label>
                     <div class="input-group">
                        <input type="text" v-model="nmPelanggan" class="form-control" placeholder="Nama Pelanggan" />
                        <button type="submit" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-xl-6">
                  <div class="form-tabel" id="form-center">
                     <div class="form-group d-lg-flex mb-0 align-items-center">
                        <label>Tanggal</label>
                        <div class="input-group date_1 mr-2">
                           <VueDatePicker no-calendar-icon fullscreen-mobile :color="color" no-header format="DD / MM / YYYY" :visible="isVisible1" @onClose="isVisible1 = false" v-model="dateAt" @input="getAll" />
                           <div class="vd-picker__input-icon">
                              <div class="vd-picker__input-icon__wrapper">
                                 <span>
                                    <input type="checkbox" class="date mt-1" id="isVisible1" name="isVisible1" v-model="isVisible1">
                                 </span>
                                 <span aria-hidden="true" class="vd-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="16" width="16" role="img" aria-hidden="true" data-icon="calendarAlt">
                                       <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div class="input-group">
                           <VueDatePicker no-calendar-icon fullscreen-mobile :color="color" no-header format="DD / MM / YYYY" :visible="isVisible2" @onClose="isVisible2 = false" v-model="dateTo" @input="getAll" />
                           <div class="vd-picker__input-icon">
                              <div class="vd-picker__input-icon__wrapper">
                                 <span>
                                    <input type="checkbox" class="date mt-1" id="isVisible2" name="isVisible2" v-model="isVisible2">
                                 </span>
                                 <span aria-hidden="true" class="vd-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="16" width="16" role="img" aria-hidden="true" data-icon="calendarAlt">
                                       <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="table-responsive">
            <table class="table table-hover table-bordered">
               <thead>
                  <tr>
                     <td>No</td>
                     <td>Tanggal</td>
                     <td>No Bukti</td>
                     <td>Nama Pelanggan</td>
                     <td>Status</td>
                     <td>Jumlah</td>
                     <td>Diskon</td>
                     <td>Kode Unik</td>
                     <td>Netto</td>
                     <td>Aksi</td>
                  </tr>
               </thead>
               <tbody v-if="penjualanSafari.length > 0">
                  <tr v-for="data in filters" :key="data.id">
                     <td class="text-center p-0">{{ data.no }}.</td>
                     <td>{{ data.tgl }}</td>
                     <td>{{ data.nobukti }}</td>
                     <td>{{ data.namacustomer }}</td>
                     <td>{{ data.status }}</td>
                     <td class="text-right">{{vueNumberFormat(data.jumlah, {})}}</td>
                     <td class="text-right">{{vueNumberFormat(data.discount, {})}}</td>
                     <td class="text-right">{{data.unik}}</td>
                     <td class="text-right">{{vueNumberFormat(data.netto, {})}}</td>
                     <td class="text-center">
                        <a @click.prevent="viewDetail(data)" class="btn-lihat" type="button" data-toggle="modal" data-target="#modalDetail">
                           <img src="../../assets/images/ic_eye.svg" width="23" alt="" />
                        </a>
                     </td>
                  </tr>
               </tbody>
               <tbody v-else>
                  <tr><td colspan="12" class="text-center">Data Kosong</td></tr>
                  <tr>
                     <td colspan="12" class="text-center">
                        <div class="text-center">
                           <img src="../../assets/images/ilus_tripwe_2.svg" width="55%" class="mt-3" alt="Tripwe Jurnal">
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>

   <div v-if="myModal" id="table-detail">
      <transition name="modal">
         <div class="modal-mask">
            <div class="modal-wrapper">
               <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                     <div class="modal-header">
                        <slot name="header">
                           <h3>{{ tipe }}<span class="title-modal-detail">{{ titleModal }}</span></h3>
                           <button type="button" class="close pl-0" @click="close"><span aria-hidden="true">&times;</span></button>
                        </slot>
                     </div>
                     <div class="modal-body">
                        <slot name="body">
                           <div class="table-responsive">
                                 <table class="table mb-0">
                                 <thead>
                                       <tr>
                                          <td>#</td>
                                          <td>Paket</td>
                                          <td>Tanggal</td>
                                          <td>Jam</td>
                                          <td>Unit</td>
                                          <td>Harga</td>
                                          <td>Jumlah</td>
                                       </tr>
                                 </thead>
                                 <tbody>
                                       <tr v-for="data in details" :key="data.id">
                                          <td>{{ data.no }}</td>
                                          <td>{{ data.namapaket }}</td>
                                          <td>{{ data.tglawal }}</td>
                                          <td>{{ data.jam_awal }} - {{ data.jam_akhir }}</td>
                                          <td class="text-center">{{ data.qtyunit }}</td>
                                          <td class="text-right">{{ vueNumberFormat( data.harga, {} ) }}</td>
                                          <td class="text-right">{{ vueNumberFormat( data.jumlah_d, {} ) }}</td>
                                       </tr>
                                 </tbody>
                              </table>
                           </div>
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
  name: 'PenjualanSafari',
  components: {
    Navbar,
    TabHeader
  },
  data () {
    const date = new Date();
    const fisrtDay = new Date(date.getFullYear(), date.getMonth(), 2);
    const result_start = fisrtDay.toISOString().slice(0, 10);
    return {
        penjualanSafari: [],
        noPesanan: '',
        nmPelanggan: '',
        dateAt: result_start,
        dateTo : new Date().toISOString().slice(0, 10),
        myModal: false,
        details: [],
        color: '#1f7882',
        isVisible1: false,
        isVisible2: false
    }
  },
  methods: {
    async getAll() {
        document.title = 'Tripwe jurnal | Penjualan Safari';
        const key = JSON.parse(sessionStorage.getItem('userLogin'));
        axios
          .post('https://api.saebo.id/trip/fakturjual/daftarjualantipe', qs.stringify({ 
              idlog    : key.idlog,
              user     : key.userkey,
              token    : key.token,
              dari     : this.dateAt,
              sampai   : this.dateTo,
              tipe     : 'SAFARI',
              srnobukti: this.noPesanan,
              srcabang : '',
              srstatus : ''
          }))
          .then(res => {
              if (res.data.status === 102) {
                this.penjualanSafari = res.data.data;
                if (res.data.data.length == 0) {
                    this.$toasted.error(`${res.data.data.length} Data`, {
                      theme: 'bubble',
                      duration : 3000
                    })
                }
                else {
                    this.$toasted.success(`${res.data.data.length} Data`, {
                      theme: 'bubble',
                      duration : 3000
                    })
                }
              }
              else {
                this.$toasted.error(res.data.message, {
                    theme: 'bubble',
                    duration : 5000
                })
              }
          })
          .catch(err => console.log(err))
    },
   async viewDetail(data) {
      this.titleModal = data.nobukti;
      this.tipe = data.tipe;
      this.myModal = true;
      const key = JSON.parse(sessionStorage.getItem('userLogin'));
      await axios
         .post('https://api.saebo.id/trip/fakturjual/daftarjualandetail', qs.stringify({ 
            idlog    : key.idlog,
            user     : key.userkey,
            token    : key.token,
            tipe     : data.tipe,
            nobukti  : data.nobukti
         }))
         .then(res => {
            if (res.data.status === 102) {
               this.details = res.data.data;   
               if (res.data.data.length <= 0) {
                  this.$toasted.info(`Tidak ada data detail !`, {
                     theme: 'bubble',
                     duration: 5000
                  });
               }
            }
            else {
               this.$toasted.error(`${res.data.message} !`, {
                  theme: 'bubble',
                  duration: 5000
               });
            }
         })
         .catch(err => console.log(err));
   },
   close() {
      this.myModal = false;
      this.titleModal = '';
      this.details = [];
   }
  },
  computed: {
    filters() {
        return this.penjualanSafari.filter((data) => {
          return data.namacustomer.toLowerCase().match(this.nmPelanggan.toLowerCase());
        });
    }
  },
  created() {
    this.getAll();
  }
}
</script>
