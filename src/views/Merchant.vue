<template>
  <div class="bank">
    <Navbar />
    <TabHeader />
   <div id="tripwe-table">
      <div class="compt-table">
         <div class="container-fluid">
            <h1 class="title">Daftar Merchant</h1>
            <div class="row mt-4">
               <div class="col-12">
                  <div class="form-inline form-tabel">
                     <label>Search</label>
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
                     <td>No</td>
                     <td>Nama</td>
                     <td>Toko</td>
                     <td>Alamat Toko</td>
                     <td>Rental</td>
                     <td>Alamat Rental</td>
                     <td>Safari</td>
                     <td>Alamat Safari</td>
                     <td>Offroad</td>
                     <td>Alamat Offroad</td>
                     <td>Onroad</td>
                     <td>Alamat Onroad</td>
                     <!-- <td colspan="2">Aksi</td> -->
                  </tr>
               </thead>
               <tbody v-if="merchands.length > 0">
                  <tr v-for="data in merchands" :key="data.id">
                     <td class="text-center p-0">{{ data.no }}.</td>
                     <td>{{ data.nama }}</td>
                     <td>{{ data.toko }}</td>
                     <td>{{ data.alamattoko }}</td>
                     <td>{{ data.rental }}</td>
                     <td>{{ data.alamatrental }}</td>
                     <td>{{ data.safari }}</td>
                     <td>{{ data.alamatsafari }}</td>
                     <td>{{ data.offroad }}</td>
                     <td>{{ data.alamatoffroad }}</td>
                     <td>{{ data.onroad }}</td>
                     <td>{{ data.alamatonroad }}</td>
                     <!-- <td class="text-center p-0">
                        <a class="icon-aksi" title="Edit Bank">
                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20px" height="20px">
                              <g id="surface21375473">
                                 <path class="edit" style=" stroke:none;fill-rule:nonzero;fill:#1f7882;fill-opacity:1;" d="M 16.9375 1.0625 L 3.875 14.125 L 1.074219 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.835938 4.960938 20.9375 3.0625 C 19.039062 1.164062 16.9375 1.0625 16.9375 1.0625 Z M 17.3125 2.6875 C 18.382812 2.890625 19.238281 3.34375 19.894531 4.023438 C 20.554688 4.699219 21.019531 5.59375 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 Z M 4.976562 15.125 C 4.992188 15.128906 6.179688 15.429688 7.375 16.625 C 8.675781 17.824219 8.875 18.925781 8.875 18.925781 L 8.917969 18.976562 L 5.367188 20.117188 L 3.871094 18.621094 Z M 4.976562 15.125 "/>
                              </g>
                           </svg>
                        </a>
                     </td>
                     <td class="text-center p-0">
                         <a class="icon-aksi" title="Hapus Bank">
                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20px" height="20px">
                              <g id="surface13085379">
                                 <path class="delete" style=" stroke:none;fill-rule:nonzero;fill:rgb(90.588236%,29.803923%,23.529412%);fill-opacity:1;" d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 Z M 4.367188 7 L 6.070312 22 L 17.929688 22 L 19.632812 7 Z M 4.367188 7 "/>
                              </g>
                           </svg>
                        </a>
                     </td> -->
                  </tr>
               </tbody>
               <tbody v-else>
                     <tr><td colspan="14" class="text-center">Data Kosong</td></tr>
                     <tr>
                        <td colspan="14" class="text-center">
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

   <!-- <div class="container-fluid fixed-bottom">
      <div class="row justify-content-center">
         <div class="col-12 col-md-3 justify-content-center align-items-center align-self-center align-middle text-center">
            <div class="nav-dock shadow-lg d-flex">
               <div class="item justify-content-center">
                  <img src="../assets/images/ic_save.svg" class="btn-dock" alt="">
                  <p class="title">Simpan</p>
               </div>
               <div class="item justify-content-center">
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
               </div>
            </div>
         </div>
      </div>
   </div> -->

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'Pedagang',
  components: {
    Navbar,
    TabHeader,
  },
  data() {
     return {
        merchands: [],
        search: ''
     }
  },
  methods: {
     async getAll() {
      document.title = 'Tripwe jurnal | Daftar Cabang';
      const key = JSON.parse(sessionStorage.getItem('userLogin'));
      await axios
         .post('https://api.saebo.id/trip/cabang/daftarmerchant', qs.stringify({
            idlog    : key.idlog,
            user     : key.userkey,
            token    : key.token,
            search   : this.search
         }))
         .then((response) => {
            this.merchands = response.data.data;
            console.log(this.merchands)
         })
         .catch((error) => {
            console.log(error);
            this.errored = true
         })
         .finally(() => this.loading = false);
      },
  },
  created() {
     this.getAll();
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
</style>