<template>
<div class="kas-keluar">
    <Navbar />
    <TabHeader />

      <!-- Table -->
      <div id='tripwe-table'>
         <div class='compt-table'>
            <div class='container-fluid'>
               <h1 class='title'>Daftar Jurnal Penyesuaian</h1>
               <div class="row mt-4">
                  <div class="col-12 col-xl-3">
                     <div class="form-inline form-tabel">
                        <label>No Bukti</label>
                        <div class="input-group">
                           <input type="text" v-model="noBukti" @input="getAll" class="form-control" placeholder="No. Bukti" />
                           <button class="btn"><ion-icon name="search-outline"></ion-icon></button>
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
            <div class='table-responsive'>
               <table class='table table-hover table-bordered'>
                  <thead>
                     <tr>
                        <td width="20px">No</td>
                        <td>Tanggal</td>
                        <td>No. Bukti</td>
                        <td>Tabel</td>
                        <td>Total Debet</td>
                        <td>Total Kredit</td>
                        <td>Aksi</td>
                     </tr>
                  </thead>
                  <tbody v-if="jurnals.length > 0">
                     <tr v-for="data in jurnals" :key="data.no">
                        <td>{{ data.no }}.</td>
                        <td>{{ data.tgl }}</td>
                        <td>{{ data.nobukti }}</td>
                        <td>{{ data.tabel }}</td>
                        <td class="text-right">{{ vueNumberFormat(parseInt(data.totaldebet), {}) }}</td>
                        <td class="text-right">{{ vueNumberFormat(parseInt(data.totalkredit), {}) }}</td>
                        <td class='p-0'>
                           <span class="d-flex justify-content-center">
                              <a class='icon-aksi mx-1' :title='"Edit kode " + data.nobukti' @click='editHeader(data)' data-toggle='modal' data-target='#modalBank'>
                                 <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24' width='20px' height='20px'>
                                    <g id='surface21375473'>
                                       <path class='edit' style='stroke:none;fill-rule:nonzero;fill:#1f7882;fill-opacity:1;' d='M 16.9375 1.0625 L 3.875 14.125 L 1.074219 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.835938 4.960938 20.9375 3.0625 C 19.039062 1.164062 16.9375 1.0625 16.9375 1.0625 Z M 17.3125 2.6875 C 18.382812 2.890625 19.238281 3.34375 19.894531 4.023438 C 20.554688 4.699219 21.019531 5.59375 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 Z M 4.976562 15.125 C 4.992188 15.128906 6.179688 15.429688 7.375 16.625 C 8.675781 17.824219 8.875 18.925781 8.875 18.925781 L 8.917969 18.976562 L 5.367188 20.117188 L 3.871094 18.621094 Z M 4.976562 15.125 '/>
                                    </g>
                                 </svg>
                              </a>
                              <a class='icon-aksi mr-1' :title='"Hapus kode " + data.nobukti' @click='deleteHeader(data.id, data.nobukti)'>
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

      <!-- NavDock -->
      <div class='container-fluid'>
         <div class='row'>
            <div class='col-3 col-sm-2 col-md-2 col-lg-1 fixed-bottom mx-auto'>
               <div class='nav-dock shadow-lg d-flex'>
                  <div @click='openModal' class='item'>
                     <svg class='btn-dock' xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 512 512'>
                        <path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/>
                        <line x1='256' y1='176' x2='256' y2='336' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                        <line x1='336' y1='256' x2='176' y2='256' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                     </svg>
                     <p class='title'>Tambah</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- header -->
      <transition name="bounce">
         <div class="mas" v-if="modal" id="kas">
            <div class="browser">
               <div class="header">
                  <button @click="close" class="button red"><span class="pt-n5">&times;</span></button>
                  <h1 class="title">{{ titleModal }} Jurnal Penyesuaian</h1>
               </div>
               <div class="body p-4">
                  <div class="row">
                     <div class="col-12 col-xl-6">
                        <div class="form-group">
                           <label class="text-info">Tanggal</label>
                           <VueDatePicker no-calendar-icon fullscreen-mobile :color="color" no-header format="DD / MM / YYYY" v-model="dateTo" @input="getCode" />
                        </div>
                     </div>
                     <div class="col-12 col-xl-6">
                        <div class="form-group">
                           <label class="text-info">Jenis Jurnal</label>
                           <select class="form-control custom-select" v-model="penyesuaian">
                              <option selected disabled>~ Pilih Jurnal ~</option>
                              <option v-for="i in masterP" :key="i" :value="i">{{ i }}</option>
                           </select>
                        </div>
                     </div>
                     <div class="col-12 col-xl-6">
                        <div class="form-group">
                           <label class="text-info">No Bukti</label>
                           <input type="text" v-model="noBukti" class="form-control" readonly />
                        </div>
                     </div>
                  </div>
                  <hr class="my-2" />
                  <div class="text-right">
                     <button class="btn btn-kun my-2" @click="openModalDetail">Detail</button>
                  </div>
                  <div class="table-responsive" id="table-detail">
                     <table class="table table-hover table-bordered">
                        <thead>
                           <tr>
                              <td>No. Akun</td>
                              <td>Nama</td>
                              <td>Keterangan</td>
                              <td>Debet</td>
                              <td>Kredit</td>
                              <td>Aksi</td>
                           </tr>
                        </thead>
                        <tbody>
                           <tr v-for="data in details" :key="data.id">
                              <td>{{ data.nomor }}</td>
                              <td>{{ data.nama }}</td>
                              <td>{{ data.keterangan }}</td>
                              <td class="text-right">{{ vueNumberFormat(parseInt(data.debet), {}) }}</td>
                              <td class="text-right">{{ vueNumberFormat(parseInt(data.kredit), {}) }}</td>
                              <td class='text-center p-0'>
                                 <a class='icon-aksi mr-1' :title='"Edit kode " + data.nobukti' @click='editDetail(data)' data-toggle='modal' data-target='#modalBank'>
                                    <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24' width='20px' height='20px'>
                                       <g id='surface21375473'>
                                          <path class='edit' style='stroke:none;fill-rule:nonzero;fill:#1f7882;fill-opacity:1;' d='M 16.9375 1.0625 L 3.875 14.125 L 1.074219 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.835938 4.960938 20.9375 3.0625 C 19.039062 1.164062 16.9375 1.0625 16.9375 1.0625 Z M 17.3125 2.6875 C 18.382812 2.890625 19.238281 3.34375 19.894531 4.023438 C 20.554688 4.699219 21.019531 5.59375 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 Z M 4.976562 15.125 C 4.992188 15.128906 6.179688 15.429688 7.375 16.625 C 8.675781 17.824219 8.875 18.925781 8.875 18.925781 L 8.917969 18.976562 L 5.367188 20.117188 L 3.871094 18.621094 Z M 4.976562 15.125 '/>
                                       </g>
                                    </svg>
                                 </a>
                                 <a class='icon-aksi ml-1' :title='"Hapus kode " + data.nobukti' @click='deleteDetail(data.idh, data.id, data.nomor)'>
                                    <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24' width='20px' height='20px'>
                                       <g id='surface13085379'>
                                          <path class='delete' style='stroke:none;fill-rule:nonzero;fill:rgb(90.588236%,29.803923%,23.529412%);fill-opacity:1;' d='M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 Z M 4.367188 7 L 6.070312 22 L 17.929688 22 L 19.632812 7 Z M 4.367188 7 '/>
                                       </g>
                                    </svg>
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td colspan="4" class="text-right p-0"><h6 class="m-0">Total Debet :</h6></td>
                              <td colspan="2" class="text-right align-middle p-0"><h5 class="m-0 text-danger">{{ vueNumberFormat(parseInt(totald), {}) }}</h5></td>
                           </tr>
                           <tr>
                              <td colspan="4" class="text-right p-0"><h6 class="m-0">Total Kredit :</h6></td>
                              <td colspan="2" class="text-right align-middle p-0"><h5 class="m-0 text-danger">{{ vueNumberFormat(parseInt(totalk), {}) }}</h5></td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <button class="btn btn-ijo-alt btn-block mt-2" id="save" @click="saveKas">
                     <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                     {{ txtBtnModal }}
                  </button>
               </div>
            </div>
         </div>
      </transition>

      <!-- Detail -->
      <transition name="fade">
         <div class="mas" v-if="detailModal" id="kas">
            <div class="browser browser-detail">
               <div class="header">
                  <button @click="closeDetail" class="button red"><span class="pt-n5">&times;</span></button>
                  <h1 class="title">{{ titleModalDetail }}</h1>
               </div>
               <div class="body p-4">
                  <div class="form-group">
                     <label class="text-info">Pos Perkiraan</label>
                     <select class="form-control custom-select" v-model="pos">
                        <option selected disabled>~ Pilih Akun Pos ~</option>
                        <option v-for="i in masterPos" :key="i.nomor" :value="i.nomor">{{ i.desk }}</option>
                     </select>
                  </div>
                  <div class="form-group">
                     <label class="text-info">Debet</label>
                     <input type="number" v-model="debet" class="form-control" />
                  </div>
                  <div class="form-group">
                     <label class="text-info">Kredit</label>
                     <input type="number" v-model="kredit" class="form-control" />
                  </div>
                  <div class="form-group">
                     <label class="text-info">Deskripsi</label>
                     <input type="text" class="form-control" v-model="deskripsi" />
                  </div>
                  <button class="btn btn-ijo-alt mt-4 btn-block" id="save" @click="saveKas">
                     <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                     {{ txtBtnMoDet }}
                  </button>
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
   name: 'JurnalPenyesuaian',
   components: {
      Navbar,
      TabHeader
   },
   data() {
      const date = new Date();
      const fisrtDay = new Date(date.getFullYear(), date.getMonth(), 2);
      const result_start = fisrtDay.toISOString().slice(0, 10);
      return {
         jurnals: [],
         details: [],
         jenis: 'tambahdata',
         dateAt: result_start,
         dateTo: new Date().toISOString().slice(0, 10),
         totald: 0,
         totalk: 0,
         idh: -1,
         idd: -1,
         noBukti: '',
         penyesuaian: 'PENYESUAIAN',
         debet: '',
         kredit: '',
         deskripsi: '',
         masterP: ['PENYESUAIAN', 'MEMORIAL'],
         pos: '',
         masterPos: '',
         modal: false,
         detailModal: false,
         loading: false,
         titleModal: '',
         txtBtnMoDet: '',
         txtBtnModal: '',
         titleModalDetail: 'Transaksi Detail',
         color: '#1f7882',
         isVisible1: false,
         isVisible2: false
      }
   },
   methods: {
      async getAll() {
         const key = await JSON.parse(sessionStorage.getItem('userLogin'));
         await axios
            .post('https://api.saebo.id/trip/jurnalpenyesuaian/datajurnalp', qs.stringify({
               idlog: key.idlog,
               user: key.userkey,
               token: key.token,
               dari: this.dateAt,
               sampai: this.dateTo,
               srnobukti: this.noBukti
            }))
            .then(res => {
               if (res.data.status === 102) {
                  this.jurnals = res.data.data;
                  if (res.data.data.length <= 0) {
                     this.$toasted.error(`${res.data.data.length} Data`, {
                        theme: 'bubble',
                        duration: 3000
                     })
                  }
                  else {
                     this.$toasted.success(`${res.data.data.length} Data`, {
                        theme: 'bubble',
                        duration: 3000
                     })
                  }
               }
            })
            .catch(err => console.log(err));
      },
      async getCode() {
         const key = JSON.parse(sessionStorage.getItem('userLogin'));
         await axios
            .post('https://api.saebo.id/trip/jurnalpenyesuaian/nobuktibaru', qs.stringify({
               idlog: key.idlog,
               user: key.userkey,
               token: key.token,
               search: this.dateTo
            }))
            .then(res => {
               if (res.data.status === 102) {
                  this.noBukti = res.data.data;
               }
               else {
                  this.$toasted.error(`${res.data.message}`, {
                     theme: 'bubble',
                     duration: 4000
                  });
               }
            })
            .catch(err => console.log(err));
      },
      async master() {
         const key =JSON.parse(sessionStorage.getItem('userLogin'));
         await axios
            .post('https://api.saebo.id/trip/api/datamaster', qs.stringify({
               idlog    : key.idlog,
               user     : key.userkey,
               token    : key.token,
            }))
            .then(res => {
               if (res.data.status === 102) {
                  this.masterPos = res.data.dataakun4;
               }
               else {
                  this.$toasted.error(`${res.data.message}`, {
                     theme: 'bubble',
                     duration: 4000
                  });
               }
            })
            .catch(err => console.log(err));
      },
      async saveKas() {
         this.loading = true;
         document.querySelector('#save').disabled = true;
         const key = await JSON.parse(sessionStorage.getItem('userLogin'));
         await axios
            .post('https://api.saebo.id/trip/jurnalpenyesuaian/simpanjurnal', qs.stringify({
               idlog       : key.idlog,
               user        : key.userkey,
               token       : key.token,
               jenis       : this.jenis,
               idh         : this.idh,
               idd         : this.idd,
               nobukti     : this.noBukti,
               tanggal     : this.dateTo,
               idakun      : this.pos,
               jenisjurnal : this.penyesuaian,
               debet       : this.debet,
               kredit      : this.kredit,
               desk2       : this.deskrips
            }))
            .then(res => {
               if (res.data.status == 102) {
                  this.details = res.data.datad;
                  this.idh = res.data.datah.id;
                  this.jenis = 'editdata';
                  this.totald = res.data.datah.totaldebet;
                  this.totalk = res.data.datah.totalkredit;
                  this.pos = '';
                  this.debet = '';
                  this.kredit = '';
                  this.deskripsi = '';
                  this.$fire({
                     title: res.data.message,
                     text: res.data.datah.nobukti,
                     type: 'success',
                     showConfirmButton: false,
                     position: 'top'
                  })
                  this.loading = false;
                  document.querySelector('#save').disabled = false;
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
                  this.loading = false;
                  document.querySelector('#save').disabled = false;
               }
            })
            .catch(err => console.log(err));
      },
      deleteHeader(id, kode) {
         this.$fire({
            title: 'Yakin Hapus ?',
            text: kode,
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
         })
         .then( (res) => {
            if (res.value === true) {
               const key = JSON.parse(sessionStorage.getItem('userLogin'));
               axios
                  .post('https://api.saebo.id/trip/jurnalpenyesuaian/hapusjurnalp', qs.stringify({
                     idlog: key.idlog,
                     user : key.userkey,
                     token: key.token,
                     idjurnal: id
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
      editHeader(data) {
         this.modal = true;
         this.master();
         this.titleModal = 'Edit';
         this.txtBtnModal = 'Edit';
         this.jenis = 'editdata';
         this.idh = data.id;
         this.dateTo = data.tgl;
         this.noBukti = data.nobukti;
         this.bank = data.idbank;
         this.deskripsi = data.deskripsi;
         this.details = data.datad;
         this.totald = data.totaldebet;
         this.totalk = data.totalkredit;
      },
      editDetail(data) {
         this.detailModal = true;
         this.idd = data.idd;
         this.pos = data.idnorek;
         this.debet = data.debet;
         this.kredit = data.kredit;
         this.deskripsi = data.keterangan;
         this.txtBtnMoDet = 'Edit';
      },
      deleteDetail(idh, id, akun) {
         this.$fire({
            title: 'Yakin Hapus ?',
            text: akun,
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
         })
         .then((res) => {
            if (res.value === true) {
               const key = JSON.parse(sessionStorage.getItem('userLogin'));
               axios
                  .post('https://api.saebo.id/trip/jurnalpenyesuaian/hapusdatad', qs.stringify({
                     idlog      : key.idlog,
                     user       : key.userkey,
                     token      : key.token,
                     idjurnalph : idh,
                     idjurnalpd : id
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
                     this.details = r.data.datad;
                     this.totalk = r.data.datah.totalkredit;
                     this.totald = r.data.datah.totaldebet;
                  })
                  .catch(e => console.log(e));
            }
         });
      },
      openModal() {
         this.modal = true;
         this.titleModal = 'Tambah';
         this.txtBtnModal = 'Tambah';
         this.total = 0;
         this.getCode();
         this.master();
      },
      close() {
         this.modal = false;
         this.dateTo = new Date().toISOString().slice(0, 10);
         this.idh = -1;
         this.jenis = 'tambahdata';
         this.noBukti = '';
         this.bank = '';
         this.deskripsi = '';
         this.details = [];
         this.getAll();
      },
      openModalDetail() {
         this.detailModal = true;
         this.txtBtnMoDet = 'Tambah';
      },
      closeDetail() {
         this.detailModal = false;
         this.pos = '';
         this.debet = '';
         this.deskripsi2 = '';
      }
   },
   created() {
      document.title = 'Jurnal Tripwe | Jurnal Penyesuaian'
      this.getAll();
   }
}
</script>
