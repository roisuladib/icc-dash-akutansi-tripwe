<template>
  <div class="penjualan-rental">
    <Navbar />
    <TabHeader />

   <div id="tripwe-table">
      <div class="compt-table">
         <div class="container-fluid">
            <h1 class="title">Daftar Jurnal Umum</h1>
            <div class="row mt-4">
               <div class="col-12 col-xl-3">
                  <div class="form-inline form-tabel">
                     <label>No Bukti</label>
                     <div class="input-group">
                        <input type="text" v-model="noBukti" @input="getAll" class="form-control" placeholder="No. Bukti" />
                        <button class="btn" type="button" @click="getAll"><ion-icon name="search-outline"></ion-icon></button>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-md-5">
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
                     <td>No. Bukti</td>
                     <td>Tabel</td>
                     <td>Total Debet</td>
                     <td>Total Kredit</td>
                     <td>Aksi</td>
                  </tr>
               </thead>
               <tbody v-if="jurnals.length > 0">
                  <tr v-for="data in jurnals" :key="data.id">
                     <td class="text-center">{{ data.no }}.</td>
                     <td>{{ data.tgl }}</td>
                     <td>{{ data.nobukti }}</td>
                     <td>{{ data.tabel }}</td>
                     <td class="text-right">{{ vueNumberFormat(parseInt(data.totaldebet), {}) }}</td>
                     <td class="text-right">{{ vueNumberFormat(parseInt(data.totalkredit), {}) }}</td>
                     <td class="p-0">
                        <span class="d-flex justify-content-center">
                           <a class="icon-aksi btn-lihat mx-1" @click="open(data)">
                              <img src="../../assets/images/ic_eye.svg" width="23" alt="" />
                           </a>
                           <a class='icon-aksi mr-1' :title='"Hapus kode " + data.nobukti' @click='deleteJurnal(data.id, data.nobukti)'>
                              <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24' width='20px' height='20px'>
                                 <g id='surface13085379'>
                                    <path class='delete' style='stroke:none;fill-rule:nonzero;fill:rgb(90.588236%,29.803923%,23.529412%);fill-opacity:1;' d='M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 Z M 4.367188 7 L 6.070312 22 L 17.929688 22 L 19.632812 7 Z M 4.367188 7 '/>
                                 </g>
                              </svg>
                           </a>
                        </span>
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

   <!-- header -->
   <transition name="bounce" id="#table-detail">
      <div class="mas" v-if="modal" @click="close">
         <div class="browser">
            <div class="header">
               <button @click="close" class="button red"><span class="pt-n5">&times;</span></button>
               <h1 class="title">Detail <span class="title-modal-detail">{{ titleModal }}</span></h1>
            </div>
            <div class="body p-4">
               <div class="table-responsive" id="table-detail">
                  <table class="table table-hover table-bordered">
                     <thead>
                        <tr>
                           <td>No. Rek</td>
                           <td>Nama</td>
                           <td>Debet</td>
                           <td>Kredit</td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="data in details" :key="data.id">
                           <td>{{ data.norek }}</td>
                           <td>{{ data.nama }}</td>
                           <td class="text-right">{{ vueNumberFormat(parseInt(data.debet), {}) }}</td>
                           <td class="text-right">{{ vueNumberFormat(parseInt(data.kredit), {}) }}</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </transition>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'JurnalUmum',
  components: {
    Navbar,
    TabHeader
  },
  data () {
    const date = new Date();
    const fisrtDay = new Date(date.getFullYear(), date.getMonth(), 2);
    const result_start = fisrtDay.toISOString().slice(0, 10);
    return {
        noBukti: '',
        dateAt: result_start,
        dateTo : new Date().toISOString().slice(0, 10),
        modal: false,
        jurnals: [],
        details: [],
        titleModal: '',
        color: '#1f7882',
        isVisible1: false,
        isVisible2: false
    }
  },
  methods: {
     async getAll() {
        document.title = 'Tripwe jurnal | Jurnal Umum';
        const key = JSON.parse(sessionStorage.getItem('userLogin'));
        await axios
          .post('https://api.saebo.id/trip/jurnal/datajurnal', qs.stringify({ 
              idlog    : key.idlog,
              user     : key.userkey,
              token    : key.token,
              dari     : this.dateAt,
              sampai   : this.dateTo,
              srnobukti: this.noBukti
          }))
          .then(res => {
              if (res.data.status === 102) {
                this.jurnals = res.data.data;
                if (res.data.data.length == 0) {
                    this.$toasted.error(`Silahkan Filter`, {
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
      deleteJurnal(id, kode) {
         this.$fire({
            title: 'Yakin Hapus ?',
            text: kode,
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
         })
         .then((res) => {
            if (res.value === true) {
               const key = JSON.parse(sessionStorage.getItem('userLogin'));
               axios
                  .post('https://api.saebo.id/trip/jurnal/hapusjurnal', qs.stringify({
                     idlog    : key.idlog,
                     user     : key.userkey,
                     token    : key.token,
                     idjurnal : id
                  }))
                  .then((r) => {
                     if (r.data.status === 102) {
                        this.$fire({
                           title : r.data.message,
                           type  : 'success',
                           showConfirmButton: false,
                           timer : 3000,
                           position: 'top'
                        });
                     }
                     else {
                        this.$fire({
                           title : r.data.message,
                           type  : 'error',
                           position: 'top'
                        })
                     }
                     this.getAll();
                  })
                  .catch(e => console.log(e));
            }
         });
      },
      open(data) {
         this.modal = true;
         this.titleModal = data.nobukti;
         this.details = data.datad;
      },
      close() {
         this.modal = false;
         this.titleModal = '';
      }
  },
  created() {
    this.getAll();
  }
}
</script>
