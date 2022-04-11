<template>
   <div class="my-navbar">
      <nav class="navbar navbar-expand-lg py-0">
         <div class="container-fluid px-0">
            <router-link to="/" class="navbar-brand logo">
               <ion-icon class="align-middle" name="logo-apple"></ion-icon>
               Tripwe
            </router-link>
            <Slide disableEsc width="200" id="navbar-mobile">
               <router-link to="/" href="#"> 
                  <span><ion-icon name="home-outline" class="align-middle pr-2"></ion-icon>Home</span>  
               </router-link>
               <router-link to="/menu" href="#"> 
                  <span><ion-icon name="chevron-forward-outline" class="align-middle pr-2"></ion-icon>Menu</span>  
               </router-link>
               <router-link to="/master-data" href="#"> 
                  <span><ion-icon name="documents-outline" class="pr-2"></ion-icon>Data Master</span>  
               </router-link>
               <router-link to="/jurnals" href="#"> 
                  <span><ion-icon name="cube-outline" class="pr-2"></ion-icon>Jurnals</span>  
               </router-link>
               <router-link to="/kas"> 
                  <span><ion-icon name="book-outline" class="pr-2"></ion-icon>Kas</span>  
               </router-link>
               <router-link to="/laporan" href="#"> 
                  <span><ion-icon name="document-text-outline" class="pr-2"></ion-icon>Laporan</span>  
               </router-link>
               <router-link to="/settings" href="#"> 
                  <span><ion-icon name="settings-outline" class="pr-2"></ion-icon>Settings</span>  
               </router-link>
               <a @click="logout" href="#"> 
                  <span id="logout"><ion-icon name="log-out-outline" class="pr-2"></ion-icon>Keluar</span>  
               </a>
            </Slide>
            <ul class="navbar-nav mx-auto my-nav">
               <li class="nav-item dropdown px-0">              
                  <router-link to="/menu" class="nav-link" id="navbarDropdown" data-toggle="dropdown">
                     <ion-icon name="menu-outline" style="font-size: 27px;"></ion-icon>
                     Menu
                  </router-link>             
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <a class="dropdown-item" href="#">Menu 1</a>
                     <a class="dropdown-item" href="#">Menu 2</a>
                     <a class="dropdown-item" href="#">Menu 3</a>
                  </div>
               </li>
               <li class="nav-item px-0">
                  <router-link to="/master-data" class="nav-link">
                     <ion-icon name="documents-outline"></ion-icon>
                     Data Master
                  </router-link>
               </li>
               <li class="nav-item px-0">
                  <router-link to="/jurnals" class="nav-link">
                     <ion-icon name="cube-outline"></ion-icon>
                     Jurnals
                  </router-link>
               </li>
               <li class="nav-item px-0">
                  <router-link to="/kas" class="nav-link">
                  <ion-icon name="book-outline"></ion-icon>
                     Kas
                  </router-link>               
               </li>
               <li class="nav-item px-0">
                  <router-link to="/laporan" class="nav-link">
                     <ion-icon name="document-text-outline"></ion-icon>
                     Laporan
                  </router-link>
               </li>
               <li class="nav-item px-0">
                  <router-link to="/settings" class="nav-link">
                     <ion-icon name="settings-outline"></ion-icon>
                     Settings
                  </router-link>     
               </li>
            </ul>
            <div class="jenis-user text-center">
               <img src="../assets/images/ic_jenis_user.png" width="30" alt="Command User">
               <p>Command Center</p>
            </div>
            <div class="nav-right">
               <a class="item">
                  <img class="link" src="../assets/images/ic_jam.png" alt="">
               </a>
               <a class="item dropdwon">
                  <img class="link" src="../assets/images/ic_notification.png" alt="">
               </a>
               <a @click="setting" data-toggle="modal" data-target="#modalProfile" class="item">
                  <img class="link" src="../assets/images/ic_user.png" style="margin-right: 0 !important;" alt="">
               </a>
            </div>
         </div>
      </nav>

      <!-- Modal -->
      <div class="modal fade modal-profile" id="modalProfile" data-backdrop="static">
         <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content p-0">
               <div class="modal-body p-0">
                  <div class="container-fluid">
                     <div class="row">
                        <div class="col-12 col-md-6 p-0 text-center">
                           <div class="left">
                              <h4>Profile</h4>
                              <div class="frame mx-auto">
                                 <img src="../assets/images/pic_user.jpg" width="160" alt="">
                              </div>
                              <!-- <form action="">
                                 <div class="edit">
                                    <input type="file" accept="image/*" class="d-none" />
                                    <img src="../assets/images/ic_edit_profile.png" width="20" alt="">
                                 </div>
                              </form> -->
                              <p class="name mb-3 mt-2 text-dark" v-for="data in settings" :key="data.id">{{ data.nama }}</p>
                              <ul class="nav nav-pills justify-content-center mb-3 text-center" id="pills-tab" role="tablist">
                                 <li class="nav-item mr-2" role="presentation">
                                    <a class="nav-link active" data-toggle="pill" href="#profile">
                                       <img src="../assets/images/ic_user_white.svg" width="19" alt="">
                                       My Profile
                                    </a>
                                 </li>
                                 <li class="nav-item ml-2" role="presentation">
                                    <a class="nav-link" data-toggle="pill" href="#password">
                                       <img src="../assets/images/ic_lock_white.svg" width="19" alt="">
                                       Password
                                    </a>
                                 </li>
                              </ul>
                              <div class="text-center btn-logout">
                                 <a @click="logout" class="btn btn-warning">
                                    <img src="../assets/images/ic_logout.svg" width="19" alt="">
                                    Logout
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                           <div class="right">
                              <div class="tab-content" id="tab-profile">
                                 <div class="tab-pane fade show active" id="profile">
                                    <img src="../assets/images/ic_user.svg" width="27" alt="" />
                                    <span class="title">Profile</span>
                                    <form action="">
                                       <div class="form-group">
                                          <label for="name" id="label1"><span class="start">&#42; &nbsp;</span>Nama :</label>
                                          <input type="text" class="form-control is-valid" v-for="data in settings" :key="data.id" v-model="data.nama" autofocus />
                                       </div>
                                       <div class="form-group">
                                          <label for="telephone"><span class="start">&#42; &nbsp;</span>Telephone :</label>
                                          <input type="number" class="form-control"  v-for="data in settings" :key="data.id" v-model="data.telp" />
                                       </div>
                                       <div class="form-group">
                                          <label for="number">Virtual Account :</label>
                                          <input type="number" class="form-control"  v-for="data in settings" :key="data.id" v-model="data.va" />
                                       </div>
                                       <div class="form-group">
                                          <label><span class="start">&#42; &nbsp;</span>Tanggal Regestrasi :</label>
                                          <input type="date" class="form-control" />
                                       </div>
                                    </form>
                                 </div>
                                 <div class="tab-pane fade" id="password">
                                    <img src="../assets/images/ic_lock.svg" width="27" alt="" />
                                    <span class="title">Password</span>
                                    <form action="">
                                       <div class="form-group">
                                          <label for="password" id="label1"><span class="start">&#42; &nbsp;</span>Password lama :</label>
                                          <input type="password" name="password" class="form-control" autofocus />
                                       </div>
                                       <div class="form-group">
                                          <label for="password"><span class="start">&#42; &nbsp;</span>Password baru :</label>
                                          <input type="password" name="password" class="form-control" />
                                       </div>
                                       <div class="form-group">
                                          <label for="password"><span class="start">&#42; &nbsp;</span>Ulangi password baru :</label>
                                          <input type="password" name="password" class="form-control" />
                                       </div>
                                    </form>
                                 </div>
                              </div>
                              <div class="text-right mt-4">
                                 <button type="button" class="btn btn-ijo ml-2">Simpan</button>
                                 <button type="button" class="btn btn-kun ml-2" data-dismiss="modal">Batal</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import axios from 'axios';
import qs from 'qs';

export default {
   name: 'Navbar',
   components: {
      Slide
   },
   data() {
      return {
         settings: '',
      }
   },
   methods: {
      async setting() {
         const key = JSON.parse(sessionStorage.getItem('userLogin'));
         await axios
            .post('https://api.saebo.id/trip/setting/datasetting', qs.stringify({
               idlog: key.idlog,
               user: key.userkey,
               token: key.token,
               jenis: this.jenis
            }))
            .then(res => {
               if (res.data.status === 102) {
                  this.settings = res.data.data;
               }
            })
      },
      logout() {
         this.$fire({
            title: 'Yakin Keluar ?',
            text: "Anda mungkin tidak bisa melihat data lagi, kecuali anda masuk lagi.",
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak'
         })
         .then((result) => {
            if (result.value === true) {
               this.$fire({
                  title : 'Keluar Sistem',
                  text  : 'Selamat "SUPER ADMIN" anda keluar dari sistem',
                  type  : 'success',
                  showConfirmButton: false,
                  timer : 3000,
                  position: 'top'
               });
               sessionStorage.clear();
               this.$router.push({name: 'Login'});
               const el = document.querySelector('.modal-backdrop');
               el.remove();
            }
         });
      }
   }
}
</script>
