<template>
   <div class="login">
      <div class="container-fluid">
         <div class="row justify-content-center">
            <div class="col-12 col-sm-3">
               <div class="form-login">
                  <div class="logo">
                     <ion-icon class="login-logo" name="logo-apple"></ion-icon>
                     <span class="login-title">Login</span>
                  </div>
                  <div class="form-group">
                     <label for="telp">Telephone</label>
                     <input type="text" class="form-control" v-model="telp" autofocus />
                  </div>
                  <div class="form-group">
                     <label for="telp">Password</label>
                     <input type="password" class="form-control" v-model="pass" />
                  </div>
                  <button @click="login" class="btn btn-login btn-block">
                     <div v-if="loading" class="spinner-border spinner-border-sm"></div>
                     Login
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'

export default {  
   name: 'Login',
   data() {
      return {
         telp: '',
         pass: '',
         loading: false
      }
   },
   mounted() {
      document.title = 'Tripwe jurnal | Login';
   },
   methods: {
      async login() {
         this.loading = !false;
         if (this.loading)
         document.querySelector('.btn-login').disabled = true;
         await axios
            .post('https://api.saebo.id/trip/login/login', qs.stringify({
               telp: this.telp,
               pass: this.pass
            }))
            .then(response => {
               const res = response.data;
               if(res.message === 'Login Berhasil' && res.userkey > 0 && res.token !== null) {
                  this.$fire({
                     title : res.message,
                     text  : 'Selamat Datang "SUPER ADMIN"',
                     type  : 'success',
                     showConfirmButton: false,
                     position: 'top',
                  }).then(res => {
                     console.log(res.value);
                  });
                  this.loading = !true
                  this.login = res;
                  sessionStorage.setItem('userLogin', JSON.stringify(res));
                  this.$router.push({name:'Home'});
               }
               else {
                  this.$fire({
                     title : res.message,
                     text  : 'Kemungkinan Salah No. Telephone atau Password !',
                     icon  : 'error',
                     type  : 'error',
                     timer : 5000
                  }).then(res => {
                     console.log(res.value);
                  });
               }
            })
            .catch(err => console.log(err));
      }
   }
}
</script>

<style scoped>
   .login .form-login {
      margin-top: 25vh;
   }
   .login .form-login .logo{
      margin-bottom: 38px;
      text-align: center;
   }
   .login .form-login .logo .login-logo{
      font-size: 50px;
      vertical-align: middle;
      margin-left: -8px;
      margin-right: 15px;
   }
   .login .form-login .logo .login-title{
      font-size: 40px;
      font-weight: 700;
      vertical-align: middle;
   }
   label {
      font-size: 15px;
      font-weight: 500;
   }
   input {
      border-radius: 8px;
      background-color: #fff !important;
      border-color: #fff;
   }
   input:active,
   input:focus {
      background-color: #fff;
      border-color: #1f7882;
      outline: 0;
      box-shadow: 0 0 0 0.2rem #1f788288;
   }

   input[type='password'] {
      font-size: 40px;
      max-height: 38px;
   }

   button {
      margin-top: 40px;
   }
   .btn-login {
   background-color: #268a96;
   border-radius: 8px;
   color: #fff;
   position: relative;
   text-decoration: none;
   transition: all .3s;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   }

   .btn-login:before {
   background-color: initial;
   background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
   border-radius: 125px;
   content: "";
   height: 50%;
   left: 0%;
   opacity: .5;
   position: absolute;
   top: 0;
   transition: all .3s;
   width: 100%;
   }

   .btn-login:hover {
   box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
   transform: scale(1.05);
   }
</style>
