<template>
  <div class='bank'>
    <Navbar />
    <TabHeader />

    <!-- Table -->
      <div id='tripwe-table'>
         <div class='compt-table'>
            <div class='container-fluid'>
               <h1 class='title'>Daftar Bank</h1>               
               <div class='row mt-4'>
                  <div class='col-12'>
                     <div class='form-inline form-tabel'>
                        <label>Search</label>
                        <div class='input-group'>
                           <input type='text' class='form-control' v-model="search" @input="getAll" placeholder='Search...' autofocus />
                           <button @click="getAll" type="button" class='btn'><ion-icon name='search-outline'></ion-icon></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class='table-responsive'>
               <table class='table table-hover table-bordered'>
                  <thead>
                     <tr>
                        <td class='p-0'>No</td>
                        <td>Kode</td>
                        <td>Nama</td>
                        <td>Norek</td>
                        <td>Pemilik</td>
                        <td>Alamat</td>
                        <td>Telepon</td>
                        <td>Nomer Akun</td>
                        <td>Nama Akun</td>
                        <td>Aksi</td>
                     </tr>
                  </thead>
                  <tbody v-if="banks.length > 0">
                     <tr v-for='data in banks' :key='data.id'>
                        <td class='text-center px-1'>{{ data.no }}.</td>
                        <td>{{ data.kode }}</td>
                        <td>{{ data.nama }}</td>
                        <td>{{ data.norek }}</td>
                        <td>{{ data.pemilik }}</td>
                        <td>{{ data.alamat }}</td>
                        <td>{{ data.telp }}</td>
                        <td>{{ data.nomerakun }}</td>
                        <td>{{ data.namaakun }}</td>
                        <td class='p-0'>
                           <span class="justify-content-center d-flex">
                              <a class='icon-aksi mx-1' :title='"Edit kode " + data.kode' @click='getBank(data)' data-toggle='modal' data-target='#modalBank'>
                                 <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24' width='20px' height='20px'>
                                    <g id='surface21375473'>
                                       <path class='edit' style='stroke:none;fill-rule:nonzero;fill:#1f7882;fill-opacity:1;' d='M 16.9375 1.0625 L 3.875 14.125 L 1.074219 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.835938 4.960938 20.9375 3.0625 C 19.039062 1.164062 16.9375 1.0625 16.9375 1.0625 Z M 17.3125 2.6875 C 18.382812 2.890625 19.238281 3.34375 19.894531 4.023438 C 20.554688 4.699219 21.019531 5.59375 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 Z M 4.976562 15.125 C 4.992188 15.128906 6.179688 15.429688 7.375 16.625 C 8.675781 17.824219 8.875 18.925781 8.875 18.925781 L 8.917969 18.976562 L 5.367188 20.117188 L 3.871094 18.621094 Z M 4.976562 15.125 '/>
                                    </g>
                                 </svg>
                              </a>
                              <a class='icon-aksi mr-1' :title='"Hapus kode " + data.kode' @click='deleteBank(data.id, data.kode)'>
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
                              <img src="../assets/images/ilus_tripwe_2.svg" width="55%" class="mt-3" alt="Tripwe Jurnal">
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
                  <div @click.prevent='openModal' class='item'>
                     <svg class='btn-dock' xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 512 512'>
                        <path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style='fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px'/>
                        <line x1='256' y1='176' x2='256' y2='336' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                        <line x1='336' y1='256' x2='176' y2='256' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
                     </svg>
                     <p class='title'>Tambah</p>
                  </div>
                  <!-- <div class='item'>
                     <img src='../assets/images/ic_export.svg' class='btn-dock' alt='Export'>
                     <p class='title'>Export</p>
                  </div>
                  <div class='item'>
                     <img src='../assets/images/ic_import.svg' class='btn-dock' alt='Import'>
                     <p class='title'>Import</p>
                  </div>
                  <div class='item'>
                     <img src='../assets/images/ic_print.svg' class='btn-dock' alt='Print'>
                     <p class='title'>Print</p>
                  </div> -->
               </div>
            </div>
         </div>
      </div>

      <!-- Modal Bank -->
      <div v-if="myModal">
         <transition name="modal">
            <div class="modal-mask">
               <div class="modal-wrapper">
                  <div class="modal-dialog modal-sm">
                     <div class="modal-content">
                        <div class="modal-header">
                           <slot name="header">
                              <h3>{{ titleModal }} Bank</h3>
                              <button type="button" class="close pl-0" @click="close"><span aria-hidden="true">&times;</span></button>
                           </slot>
                        </div>
                        <div class="modal-body">
                           <slot name="body">
                              <div class='form-bank'>
                                 <div class='form-group'>
                                    <label>No. Rekening</label>
                                    <input type='number' v-model='form.norek' class='form-control' autofocus required>
                                 </div>
                                 <div class='form-group'>
                                    <label>Nama Bank</label>
                                    <input type='text' v-model='form.nama' @input="newCode" @keydown="newCode" class='form-control' required>
                                 </div>
                                 <div class='form-group'>
                                    <label>Kode Bank</label>
                                    <input type='text' v-model='form.kode' id='kodeBank' class='form-control' readonly required>
                                 </div>
                                 <div class='form-group'>
                                    <label>Pemilik</label>
                                    <input type='text' v-model='form.pemilik' class='form-control'>
                                 </div>
                                 <div class='form-group'>
                                    <label>Alamat</label>
                                    <input type='text' v-model='form.alamat' class='form-control'>
                                 </div>
                                 <div class='form-group'>
                                    <label>Telepon</label>
                                    <input type='text' v-model='form.telp' class='form-control'>
                                 </div>
                                 <div class='form-group'>
                                    <label>POS</label>
                                    <select class='form-control custom-select' v-model='form.pos' required>
                                       <option disabled selected>~ Pilih Akun POS ~</option>
                                       <option v-for='pos in masterData.akun4' :value='pos.nomor' :key='pos.nomor'>{{ pos.desk }}</option>
                                    </select>
                                 </div>
                                 <input type="hidden" v-model="form.id" />
                                 <button @click="saveBank" type="button" id="save" class='btn btn-ijo-alt btn-block mt-4'>
                                    <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                                    {{ txtBtnModal }}
                                 </button>
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
  name: 'Bank',
  components: {
    Navbar,
    TabHeader,
  },
  data() {
     return {
        key: JSON.parse(sessionStorage.getItem('userLogin')),
        banks: [],
        myModal: false,
        loading: false,
        titleModal: '',
        txtBtnModal: '',
        masterData: {
           akun: [],
           akun1: [],
           akun2: [],
           akun3: [],
           akun4: [],
           akunHeader: [],
           bank: [],
           barang: [],
           cabang: [],
           customer: [],
           gudang: [],
           salesman: [],
           status: [],
           supplier: [],
           user: [],
        },
        form: {
           id: '',
           kode: '',
           nama: '',
           norek: '',
           pemilik: '',
           alamat: '',
           telp: '',
           pos: '',
        },
        search: '',
     }
  },
  methods: {
     openModal() {
        this.myModal = !false;
        this.titleModal = 'Tambah';
        this.txtBtnModal = 'Tambah';
     },
     close() {
        this.myModal = false;
        this.titleModal = '';
        this.txtBtnModal = '';
        this.form.kode = '';
        this.form.nama = '';
        this.form.norek = '';
        this.form.pemilik = '';
        this.form.alamat = '';
        this.form.telp = '';
        this.form.pos = '';
     },
     async newCode() {
        await axios
          .post('https://api.saebo.id/trip/bank/getnewcode', qs.stringify({
               idlog    : this.key.idlog,
               user     : this.key.userkey,
               token    : this.key.token,
               search   : this.form.nama,
          }))
          .then(res => {
             this.form.kode = res.data.data;
          })
          .catch(err => console.log(err));
     },
     async getAll() {         
         await axios
            .post('https://api.saebo.id/trip/bank/daftarbank', qs.stringify({
               idlog  : this.key.idlog,
               user   : this.key.userkey,
               token  : this.key.token,
               search : this.search,
            }))
            .then(res => {
               if (res.data.status === 102) {
                  this.banks = res.data.data;
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
               else {
                  this.$toasted.error(`${res.data.data.length} Data`, {
                     theme: 'bubble',
                     duration: 3000
                  });
               }
            })
            .catch(err => console.log(err));
     },
     async getMaster() {
        await axios
            .post('https://api.saebo.id/trip/api/datamaster', qs.stringify({
               idlog    : this.key.idlog,
               user     : this.key.userkey,
               token    : this.key.token,
            }))
            .then(r => {
               this.masterData.akun = r.data.dataakun;
               this.masterData.akun1 = r.data.dataakun1;
               this.masterData.akun2 = r.data.dataakun2;
               this.masterData.akun3 = r.data.dataakun3;
               this.masterData.akun4 = r.data.dataakun4;
               this.masterData.akunHeader = r.data.dataakunheader;
               this.masterData.bank = r.data.databank;
               this.masterData.barang = r.data.databarang;
               this.masterData.cabang = r.data.datacabang;
               this.masterData.customer = r.data.datacustomer;
               this.masterData.gudang = r.data.datagudang;
               this.masterData.status = r.data.datastatus;
               this.masterData.supplier = r.data.datasuplier;
               this.masterData.user = r.data.datauser;
            }).catch(err => console.log(err));
     },
     async saveBank() {
        this.loading = true;
        document.querySelector('#save').disabled = true;
        if (this.txtBtnModal === 'Tambah') {
            await axios
               .post('https://api.saebo.id/trip/bank/simpandata', qs.stringify({
                  idlog    : this.key.idlog,
                  user     : this.key.userkey,
                  token    : this.key.token,
                  jenis    : 'tambahdata',
                  id       : -1,
                  kode     : this.form.kode,
                  nama     : this.form.nama,
                  norek    : this.form.norek,
                  pemilik  : this.form.pemilik,
                  alamat   : this.form.alamat,
                  telp     : this.form.telp,
                  pos      : this.form.pos,
               }))
               .then(res => {
                  if (res.data.status === 102 ) {
                     this.myModal = false;
                     this.getAll();
                     this.form = {};
                     this.$fire({
                        title: res.data.message,
                        type: 'success',
                        showConfirmButton: false,
                        position: 'top'
                     })
                     this.loading = false;
                     document.querySelector('#save').disabled = false;
                     // this.$router.go(this.$router.currentRoute);
                  }
                  else if (res.data.status === 103 ) {
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
                  else if (res.data.status === 104 && res.data.message === 'Nomor Akun Pos Tidak ditemukan...') {
                     this.$fire({
                        title: res.data.message,
                        type: 'error',
                        confirmButtonText: 'Input lagi',
                        position: 'top',
                        customClass: {
                           container: 'alert-index',
                        }
                     })
                     this.loading = false;
                     document.querySelector('#save').disabled = false;
                  }
                  else if (res.data.status === 104 && res.data.message === 'Gagal Menambah Data, Kode Duplikat') {
                     this.$fire({
                        title: res.data.message,
                        type: 'error',
                        confirmButtonText: 'Oke deh',
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
        }
        if (this.txtBtnModal === 'Edit') {
            await axios
               .post('https://api.saebo.id/trip/bank/simpandata', qs.stringify({
                  idlog    : this.key.idlog,
                  user     : this.key.userkey,
                  token    : this.key.token,
                  jenis    : 'editdata',
                  id       : this.form.id,
                  kode     : this.form.kode,
                  nama     : this.form.nama,
                  norek    : this.form.norek,
                  pemilik  : this.form.pemilik,
                  alamat   : this.form.alamat,
                  telp     : this.form.telp,
                  pos      : this.form.pos,
               }))
               .then(res => {
                  if (res.data.status === 102 ) {
                     this.myModal = false;
                     this.getAll();
                     this.form = {};
                     this.$fire({
                        title: res.data.message,
                        type: 'success',
                        showConfirmButton: false,
                        position: 'top'
                     })
                     this.loading = false;
                     document.querySelector('#save').disabled = false;
                     // this.$router.go(this.$router.currentRoute);
                  }
                  else if (res.data.status === 103 ) {
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
                  else if (res.data.status === 104 && res.data.message === 'Nomor Akun Pos Tidak ditemukan...') {
                     this.$fire({
                        title: res.data.message,
                        type: 'error',
                        confirmButtonText: 'Input lagi',
                        position: 'top',
                        customClass: {
                           container: 'alert-index',
                        }
                     })
                     this.loading = false;
                     document.querySelector('#save').disabled = false;
                  }
                  else if (res.data.status === 104 && res.data.message === 'Gagal Menambah Data, Kode Duplikat') {
                     this.$fire({
                        title: res.data.message,
                        type: 'error',
                        confirmButtonText: 'Oke deh',
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
        }
     },
     async getBank(data) {
        this.myModal = true;
        this.titleModal = 'Edit';
        this.txtBtnModal = 'Edit';
        this.form.id = data.id;
        this.form.kode = data.kode;
        this.form.nama = data.nama;
        this.form.norek = data.norek;
        this.form.pemilik = data.pemilik;
        this.form.alamat = data.alamat;
        this.form.telp = data.telp;
        this.form.pos = data.pos;
     },
     deleteBank(id, kode) {
        this.$fire({
            title: 'Yakin Hapus ' + '<span class="badge badge-warning mx-2" style="border-radius: 12px;">' + kode + '</span>' + '?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
         })
         .then((result) => {
            if (result.value === true) {
               const key = JSON.parse(sessionStorage.getItem('userLogin'));
               axios
                  .post('https://api.saebo.id/trip/bank/hapusbank', qs.stringify({
                     idlog: key.idlog,
                     user : key.userkey,
                     token: key.token,
                     idbank: id
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
     }
  },
  created() {
     document.title = 'Tripwe jurnal | Daftar Bank';
    this.getAll();
    this.getMaster();
  }
}
</script>

<style scoped>
   .icon-aksi {
      cursor: pointer;
   }
   .icon-aksi:last-child{
      padding-left: 5px !important;
   }
   .icon-aksi svg g .edit:hover{
      fill: #2c5c45 !important;
   }
   .icon-aksi svg g .delete:hover{
      fill: #d41165 !important;
   }

   .form-bank .form-group {
      margin-bottom: 10px;
   }
   .form-bank .form-group label {
      margin-bottom: 0;
   }
   .form-bank .form-group input,
   .form-bank .form-group select {
      border-radius: 12px !important;
      height: 36px !important;
      font-size: 14px;
      font-weight: 500;
   }
   .form-bank .form-group input:active,
   .form-bank .form-group input:focus,
   .form-bank .form-group select:focus {
      border: 1px solid #1f7882 !important;
      outline: 0 !important;
      box-shadow: 0 0 0 0.1rem #1f788227 !important;
   }
</style>