<template>
  <div class="pesanan-pembelian">
    <Navbar />
    <TabHeader />

    <div id="tripwe-table">
      <div class="compt-table">
         <div class="container-fluid">
            <h1 class="title">Daftar Perkiraan</h1>
            <div class="row mt-4">
               <div class="col-12 col-xl-3">
                  <div class="form-inline form-tabel">
                     <label>Pencarian</label>
                     <div class="input-group">
                        <input type="text" v-model="search" @input="getAll" class="form-control" placeholder="Search..." autofocus />
                        <button type="submit" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="table-responsive">
            <table class="table table-hover table-bordered">
               <thead>
                  <tr>
                     <td class="text-center p-0">No</td>
                     <td>Nomor</td>
                     <td>Nama</td>
                     <td>Jenis Level</td>
                     <td>Level</td>
                     <td>Nomor Header</td>
                     <td>Nama Header</td>
                     <td>Posisi DK</td>
                     <td>Posisi NR</td>
                     <td>Posisi Neraca</td>
                     <td>Aksi</td>
                  </tr>
               </thead>
               <tbody v-if="daftarPerkiraan.length > 0">
                  <tr v-for="data in daftarPerkiraan" :key="data.id">
                     <td class="text-center p-0">{{ data.no }}.</td>
                     <td>{{ data.nomor }}</td>
                     <td>{{ data.nama }}</td>
                     <td>{{ data.jenislevel }}</td>
                     <td>{{ data.levelno }}</td>
                     <td>{{ data.noheader }}</td>
                     <td>{{ data.namaheader }}</td>
                     <td>{{ data.posisidk }}</td>
                     <td>{{ data.posisinr }}</td>
                     <td>{{ data.posisineraca }}</td>
                     <td class="p-0">
                        <span class="d-flex justify-content-center">
                           <a class="icon-aksi mx-1" title="Edit Bank" @click="getEdit(data)">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20px" height="20px">
                                 <g id="surface21375473">
                                    <path class="edit" style=" stroke:none;fill-rule:nonzero;fill:#1f7882;fill-opacity:1;" d="M 16.9375 1.0625 L 3.875 14.125 L 1.074219 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.835938 4.960938 20.9375 3.0625 C 19.039062 1.164062 16.9375 1.0625 16.9375 1.0625 Z M 17.3125 2.6875 C 18.382812 2.890625 19.238281 3.34375 19.894531 4.023438 C 20.554688 4.699219 21.019531 5.59375 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 Z M 4.976562 15.125 C 4.992188 15.128906 6.179688 15.429688 7.375 16.625 C 8.675781 17.824219 8.875 18.925781 8.875 18.925781 L 8.917969 18.976562 L 5.367188 20.117188 L 3.871094 18.621094 Z M 4.976562 15.125 "/>
                                 </g>
                              </svg>
                           </a>
                           <a class="icon-aksi mr-1" title="Hapus Bank" @click="deleteItem(data.id, data.nama)">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20px" height="20px">
                                 <g id="surface13085379">
                                    <path class="delete" style=" stroke:none;fill-rule:nonzero;fill:rgb(90.588236%,29.803923%,23.529412%);fill-opacity:1;" d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 Z M 4.367188 7 L 6.070312 22 L 17.929688 22 L 19.632812 7 Z M 4.367188 7 "/>
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

    <div class="container-fluid">
        <div class="row">
            <div class="col-3 col-sm-2 col-md-2 col-lg-1 fixed-bottom mx-auto">
              <div class="nav-dock shadow-lg d-flex">
                  <div @click.prevent="openModal" type="button" class="item">
                    <svg class="btn-dock" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512">
                        <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"/>
                        <line x1="256" y1="176" x2="256" y2="336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
                        <line x1="336" y1="256" x2="176" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
                    </svg>
                    <p class="title">Tambah</p>
                  </div>
                  <!-- <div class="item justify-content-center">
                    <img src="../assets/images/ic_export.svg" class="btn-dock" alt="">
                    <p class="title">Export</p>
                  </div>
                  <div class="item justify-content-center">
                    <img src="../assets/images/ic_import.svg" class="btn-dock" alt="">
                    <p class="title">Import</p>
                  </div>
                  <div class="item justify-content-center">
                    <img src="../assets/images/ic_print.svg" class="btn-dock" alt="">
                    <p class="title">Print</p>
                  </div> -->
              </div>
            </div>
        </div>
    </div>

     <!-- Modal -->
      <div v-if="myModal">
         <transition name="modal">
            <div class="modal-mask">
               <div class="modal-wrapper">
                  <div class="modal-dialog modal-sm">
                     <div class="modal-content">
                        <div class="modal-header">
                           <slot name="header">
                              <h3>{{ titleModal }}</h3>
                              <button type="button" class="close pl-0" @click="close"><span aria-hidden="true">&times;</span></button>
                           </slot>
                        </div>
                        <div class="modal-body">
                           <slot name="body">
                              <div class='form-perkiraan'>
                                 <div class='form-group'>
                                    <label>Nomor</label>
                                    <input type='number' v-model='data.nomor' class='form-control' autofocus required>
                                 </div>
                                 <div class='form-group'>
                                    <label>Nama</label>
                                    <input type='text' v-model='data.nama' class='form-control' required>
                                 </div>
                                 <div class='form-group'>
                                    <label>keterangan</label>
                                    <input type='text' v-model='data.keterangan' class='form-control' required>
                                 </div>
                                 <div class='form-group'>
                                    <label>Jenis</label>
                                    <select class="form-control custom-select" v-model="data.jenislevel">
                                       <option selected disabled>~ Pilih ~</option>
                                       <option v-for="data in data.jenislevels" :key="data" :value="data">{{ data }}</option>
                                    </select>
                                 </div>
                                 <div class='form-group'>
                                    <label>Level No</label>
                                    <select class="form-control custom-select" v-model="data.levelno">
                                       <option selected disabled>~ Pilih ~</option>
                                       <option v-for="data in data.levelnos" :key="data" :value="data">{{ data }}</option>
                                    </select>
                                 </div>
                                 <div class='form-group'>
                                    <label>No Header</label>
                                    <select class="form-control custom-select" v-model="data.nomorheader">
                                       <option selected disabled>~ Pilih ~</option>
                                       <option v-for="data in dataakun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                                    </select>
                                 </div>
                                 <div class='form-group'>
                                    <label>Posisi Dk</label>
                                    <select class="form-control custom-select" v-model="data.posisidk">
                                       <option selected disabled>~ Pilih ~</option>
                                       <option v-for="data in data.posisidks" :key="data" :value="data">{{ data }}</option>
                                    </select>
                                 </div>
                                 <div class='form-group'>
                                    <label>Posisi NR</label>
                                    <select class="form-control custom-select" v-model="data.posisinr">
                                       <option selected disabled>~ Pilih ~</option>
                                       <option v-for="data in data.posisinrs" :key="data" :value="data">{{ data }}</option>
                                    </select>
                                 </div>
                                 <div class='form-group'>
                                    <label>Posisi Neraca</label>
                                    <select class="form-control custom-select" v-model="data.posisineraca">
                                       <option selected disabled>~ Pilih ~</option>
                                       <option v-for="data in data.posisineracas" :key="data" :value="data">{{ data }}</option>
                                    </select>
                                 </div>
                                 <input type="hidden" v-model="data.id" />
                                 <button @click="save" id="btnSimpanPerk" class="btn btn-ijo-alt btn-block mt-4">
                                    <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                                    {{ txtBtn }}
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
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'DaftarPerkiraan',
  components: {
    Navbar,
    TabHeader
  },
  data() {
    return {
      daftarPerkiraan: [],
      search: '',
      data: {
         id: '',
         nomor        : '',
         nama         : '',
         keterangan   : '',
         jenislevel   : '',
         jenislevels  : ['JUDUL', 'DETIL'],
         levelno      : '',
         levelnos     : ['1', '2', '3', '4'],
         nomorheader  : '',
         posisidk     : '',
         posisidks    : ['DEBET', 'KREDIT'],
         posisinr     : '',
         posisinrs    : ['NERACA', 'R/L'],
         posisineraca : '',
         posisineracas: ['DEBET', 'KREDIT'],
      },
      dataakun: '',
      myModal: false,
      titleModal: '',
      txtBtn: '',
      loading: false
    }
  },
  methods: {
     openModal() {
        this.myModal = true;
        this.titleModal = 'Tambah Perkiraan';
        this.txtBtn = 'Simpan'
     },
     close() {
        this.data.nomor = '';
        this.data.nama = '';
        this.data.keterangan = '';
        this.data.jenislevel = '';
        this.data.levelno = '';
        this.data.nomorheader = '';
        this.data.posisidk = '';
        this.data.posisinr = '';
        this.data.posisineraca = '';
        this.myModal = false;
        this.titleModal = '';
        this.txtBtn = ''
     },
     async getAll () {
      document.title = 'Tripwe jurnal | Daftar Perkiraan';
      const key = JSON.parse(sessionStorage.getItem('userLogin'));
      await axios
         .post('https://api.saebo.id/trip/perkiraan/daftarperkiraan', qs.stringify({ 
            idlog    : key.idlog,
            user     : key.userkey,
            token    : key.token,
            search   : this.search
         }))
         .then(res => {
            if (res.data.status === 102) {
               this.daftarPerkiraan = res.data.data;
            }
            else {
               this.$fire({
                  title : res.data.message,
                  type  : 'error',
                  position: 'top'
               });
            }
         })
         .catch(error => console.log(error));
     },
     async getMaster() {
        const key = JSON.parse(sessionStorage.getItem('userLogin'));
        await axios
           .post('https://api.saebo.id/trip/api/datamaster', qs.stringify({
              idlog       : key.idlog,
              user        : key.userkey,
              token       : key.token,
           }))
           .then(res => {
              console.log(res);
              if(res.data.status === 102) {
                 this.dataakun = res.data.dataakunheader;
              }
           })
           .catch(err => {
              console.log(err);
           })
     },
     async save() {
        this.loading = !false;
        document.querySelector('#btnSimpanPerk').disabled = true;
        const key = JSON.parse(sessionStorage.getItem('userLogin'));
        if (this.txtBtn === 'Simpan') {
           await axios
               .post('https://api.saebo.id/trip/perkiraan/simpandata', qs.stringify({
                  idlog        : key.idlog,
                  user         : key.userkey,
                  token        : key.token,
                  jenis        : 'tambahdata',
                  id           : -1,
                  nomor        : this.data.nomor,
                  nama         : this.data.nama,
                  keterangan   : this.data.keterangan,
                  jenislevel   : this.data.jenislevel,
                  levelno      : this.data.levelno,
                  nomorheader  : this.data.nomorheader,
                  posisidk     : this.data.posisidk,
                  posisinr     : this.data.posisinr,
                  posisineraca : this.data.posisineraca
               }))
               .then(res => {
                  if (res.data.status === 102) {
                     this.close();
                     this.getAll();
                     this.$fire({
                        title: res.data.message,
                        type: 'success',
                        showConfirmButton: false,
                        position: 'top'
                     })
                     this.loading = false;
                     document.querySelector('#btnSimpanPerk').disabled = false;
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
                     document.querySelector('#btnSimpanPerk').disabled = false;
                  }
               })
               .catch(error => {
                  console.log(error);
                  this.errored = true;
               });
        }
        if (this.txtBtn === 'Edit') {
            const key = JSON.parse(sessionStorage.getItem('userLogin'));
            await axios
               .post('https://api.saebo.id/trip/perkiraan/simpandata', qs.stringify({
                  idlog        : key.idlog,
                  user         : key.userkey,
                  token        : key.token,
                  jenis        : 'editdata',
                  id           : this.data.id,
                  nomor        : this.data.nomor,
                  nama         : this.data.nama,
                  keterangan   : this.data.keterangan,
                  jenislevel   : this.data.jenislevel,
                  levelno      : this.data.levelno,
                  nomorheader  : this.data.nomorheader,
                  posisidk     : this.data.posisidk,
                  posisinr     : this.data.posisinr,
                  posisineraca : this.data.posisineraca
               }))
               .then(res => {
                  if (res.data.status === 102) {
                     this.close();
                     this.getAll();
                     this.$fire({
                        title: res.data.message,
                        type: 'success',
                        showConfirmButton: false,
                        position: 'top'
                     })
                     this.loading = false;
                     document.querySelector('#btnSimpanPerk').disabled = false;
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
                     });
                     this.loading = false;
                     document.querySelector('#btnSimpanPerk').disabled = false;
                  }
               }).catch(err => console.log(err));
        }
     },
     async getEdit(data) {
        this.data.id = data.id;
        this.data.nomor = data.nomor;
        this.data.nama = data.nama;
        this.data.keterangan = data.keterangan;
        this.data.jenislevel = data.jenislevel;
        this.data.levelno = data.levelno; 
        this.data.nomorheader = data.nomorheader;
        this.data.posisidk = data.posisidk;
        this.data.posisinr = data.posisinr;
        this.data.posisineraca = data.posisineraca;
        this.myModal = true;
        this.titleModal = 'Edit Perkiraan';
        this.txtBtn = 'Edit';
     },
     deleteItem(id, name) {
        this.$fire({
           title: 'Yakin Hapus ' + '<span class="badge badge-warning mx-2" style="border-radius: 12px;">' + name + '</span>' + '?',
           type: 'question',
           showCancelButton: true,
           confirmButtonText: 'Ya',
           cancelButtonText: 'Tidak'
        })
        .then((result) => {
        if (result.value === true) {
           const key = JSON.parse(sessionStorage.getItem('userLogin'));
               axios
                  .post('https://api.saebo.id/trip/perkiraan/hapusperkiraan', qs.stringify({
                     idlog       : key.idlog,
                     user        : key.userkey,
                     token       : key.token,
                     idperkiraan : id
                  }))
                  .then((res) => {
                     if (res.data.status === 102) {
                        this.$fire({
                           title : res.data.message,
                           type  : 'success',
                           showConfirmButton: false,
                           position: 'top'
                        });
                     }
                     else {
                        this.$fire({
                           title : res.data.message,
                           type  : 'error',
                           position: 'top'
                        });
                     }
                     this.getAll();
                  })
                  .catch(error => {
                     console.log(error)
                     this.errored = true
                  });
            }
         });
     },
  },
  created() {
     this.getAll();
     this.getMaster();
  }
}
</script>

<style scoped>
   .icon-aksi:last-child{
      padding-left: 5px !important;
   }
   .icon-aksi svg g .edit:hover{
      fill: #2c5c45 !important;
   }
   .icon-aksi svg g .delete:hover{
      fill: #d41165 !important;
   }
  .form-perkiraan .form-group {
      margin-bottom: 10px;
   }
   .form-perkiraan .form-group label {
      margin-bottom: 0;
   }
   .form-perkiraan .form-group input,
   .form-perkiraan .form-group select {
      border-radius: 12px !important;
      font-size: 14px;
      font-weight: 500;
   }
   .form-perkiraan .form-group input:active,
   .form-perkiraan .form-group input:focus,
   .form-perkiraan .form-group select:focus {
      border: 1px solid #1f7882 !important;
      outline: 0 !important;
      box-shadow: 0 0 0 0.1rem #1f788227 !important;
   }
</style>
