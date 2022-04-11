<template>
   <div id="tripwe-table">
      <div class="compt-permintaan-pembelian">
         <div class="container-fluid">
            <h1 class="title">Daftar Perkiraan</h1>
            <div class="row mt-4">
               <div class="col-12 col-xl-3">
                  <form action="" class="form-inline form-tabel" id="form-left">
                     <div class="form-group">
                        <label>Pencarian</label>
                        <div class="input-group">
                           <input type="text" v-model="search" @input="fetchData" class="form-control" placeholder="Search..." autofocus />
                           <button type="submit" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                        </div>
                     </div>
                  </form>
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
                     <td class="text-center p-0 d-flex">
                        <a class="icon-aksi" title="Edit Bank">
                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20px" height="20px">
                              <g id="surface21375473">
                                 <path class="edit" style=" stroke:none;fill-rule:nonzero;fill:#1f7882;fill-opacity:1;" d="M 16.9375 1.0625 L 3.875 14.125 L 1.074219 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.835938 4.960938 20.9375 3.0625 C 19.039062 1.164062 16.9375 1.0625 16.9375 1.0625 Z M 17.3125 2.6875 C 18.382812 2.890625 19.238281 3.34375 19.894531 4.023438 C 20.554688 4.699219 21.019531 5.59375 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 Z M 4.976562 15.125 C 4.992188 15.128906 6.179688 15.429688 7.375 16.625 C 8.675781 17.824219 8.875 18.925781 8.875 18.925781 L 8.917969 18.976562 L 5.367188 20.117188 L 3.871094 18.621094 Z M 4.976562 15.125 "/>
                              </g>
                           </svg>
                        </a>
                        <a class="icon-aksi" title="Hapus Bank" @click="deletePerkiraan(data.id, data.nama)">
                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="20px" height="20px">
                              <g id="surface13085379">
                                 <path class="delete" style=" stroke:none;fill-rule:nonzero;fill:rgb(90.588236%,29.803923%,23.529412%);fill-opacity:1;" d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 Z M 4.367188 7 L 6.070312 22 L 17.929688 22 L 19.632812 7 Z M 4.367188 7 "/>
                              </g>
                           </svg>
                        </a>
                     </td>
                  </tr>
               </tbody>
               <tbody v-else>
                  <loader object="#ffd22f" color1="#fff" color2="#a2d450" size="8" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
   name: 'Perkiraan',
   data () {
      return {
         daftarPerkiraan: [],
         selected: [],
         selectAll: false,
         search: ''
         // date : new Date().toISOString().slice(0, 10)x
      }
   },
   methods: {
      async fetchData () {
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
            .catch(error => {
               console.log(error);
            })
            .finally(() => this.loading = false);
      },
      deletePerkiraan(id, name) {
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
                        this.fetchData();
                     })
                     .catch(error => {
                        console.log(error)
                        this.errored = true
                     });
            }
         });
     }
   },
   created() {
      this.fetchData();
   }
}
</script>

<style scoped>
   .compt-permintaan-pembelian .title {
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      margin-top: -28px;
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
</style>
