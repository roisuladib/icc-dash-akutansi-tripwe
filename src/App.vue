<template>
  <div class="tripwe">
    <div id="app">
      <transition name="moveUp">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>

/* Date Picker */

#kas .form-group {
  margin-bottom: 10px;
}
#kas label {
  font-size: 15px !important;
  font-weight: 500 !important;
  color:#474f5c !important;
  margin-bottom: 4px !important;
}
#kas .vd-picker__input input {
  font-size: 14px !important;
  font-weight: 500 !important;
  max-height: 36px !important;
  padding: 0.375rem 0.75rem !important;
  border: 1px solid #ced4da !important;
  border-radius: 12px !important;
  color: #474f5c;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
}
#kas .vd-picker__input input:active,
#kas .vd-picker__input input:focus,
#kas .vd-picker__input input:hover {
  border: 1px solid #1f7882 !important;
  outline: 0 !important;
  box-shadow: 0 0 0 0.1rem #1f788227 !important;
}
#kas .form-control {
  font-size: 14px !important;
  font-weight: 500 !important;
  height: 36px;
}

#month .vd-picker__input input {
  font-size: 14px !important;
  font-weight: 500 !important;
  padding: 0.375rem 0.75rem !important;
  border: 1px solid #ced4da !important;
  border-radius: 0.25rem !important;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
}

.vd-picker__months-button {
  color: #1f7882 !important;
  background-color: #c5f0f5 !important;
  border-radius: 12px !important;
}
.vd-picker__months-button:hover {
  background-color: #1f7882 !important;
  color: #fff !important;
}
.vd-picker__years-button {
  color: #1f7882;
}
.vd-picker__years-button:hover {
  background-color: #c5f0f5 !important;
}
.vd-picker__years-button.active {
  color: #fff;
}
.vd-picker__years-button.active:hover {
  background-color: #1f7882 !important;
}

/* End Date Picker */

/* Global Modal */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.74);
  display: grid;
  transition: opacity 0.3s ease;
  overflow-y: scroll;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  overflow-y: auto;
}

.modal-content {
   border-radius: 20px;
   padding: 30px;
   overflow-y: auto;
}

.modal-header {
  padding: 0;
  border-bottom: none;
}
.modal-header h3 {
   margin-left: auto;
   margin-top: 0;
   margin-bottom: 16px;
   color: #1f7882;
   font-size: 20px;
   font-weight: 600;
}

.modal-body {
  padding: 0;
  color: #3a444e;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* End Global Modal */


/* ModalDetail */
#table-detail .title-modal-detail {
    display: inline-block;
    font-size: 40px;
    line-height: 0;
    padding: 20px;
    background: radial-gradient(circle farthest-corner at center center,#1f7882,#ffd22f) no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  #table-detail thead tr td{
    padding: 4px 10px;
    background: #1f7882;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    border-top: 0;
    border-bottom: 0;
  }
  #table-detail thead tr td:first-child{
    border-top-left-radius: 6px;
    border-left: 0;
  }
  #table-detail thead tr td:last-child{
    border-top-right-radius: 6px;
    border-right: 0;
  }
  #table-detail tbody tr td{
    padding: 4px 10px;
    background: #f1f8f8;
    border: none;
  }
  #table-detail tbody tr td:hover{
    background: #b3e6e6;
  }
  #table-detail .modal-content {
   padding: 20px;
}
/* End Modal Detail */

/* Modal Filter */
   #modalFilter .form-group {
      margin-bottom: 10px;
   }
   #modalFilter .form-group label {
      margin-bottom: 0;
   }
   #modalFilter .form-group input,
   #modalFilter .form-group select {
      border-radius: 12px !important;
      font-size: 14px;
      font-weight: 500;
   }
   #modalFilter .form-group input:active,
   #modalFilter .form-group input:focus,
   #modalFilter .form-group select:focus {
      border: 1px solid #1f7882 !important;
      outline: 0 !important;
      box-shadow: 0 0 0 0.1rem #1f788227 !important;
   }
/* End Modal Filter */

/* Modal Final */
  .mas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1050;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      outline: 0;
      background: rgba(0, 0, 0, 0.534);
   }
   .browser {
      position: relative;
      width: 700px;
      height: auto;
      margin: 40px auto;
      border-radius: 12px;
      background-color: #FFF;
      overflow-y: scroll;
      box-shadow: 0 1px 25px #000;
   }
   .browser-detail {
      width: 300px !important;
   }
   @media (max-width: 575.98px) {
      .browser {
         width: 95% !important;
      }
   }
   .browser .header {
      top: 0;
      width: 100%;
      border-bottom: 1px solid #7F7F7F;
      background-color: #f0f0f0;
      padding-top: 10px;
      padding-bottom: 10px;
   }
   .browser .header .button {
      position: absolute;
      top: 10px;
      right: 15px;
      border-radius: 50%;
      box-sizing: border-box;
      border: none;
      background: none;
      color: red;
      font-size: 24px;
      font-weight: 600;
   }
   .browser .header .title {
      color: #1f7882;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      margin: 0;
      padding: 5px 0;
   }
   .browser .body .form-control {
      border-radius: 12px;
      border: 0.95px solid #1f7882;
   }
   .browser .body .form-control:hover {
      border: 1.2px solid #1f7882;
   }
   .browser .body .form-control:focus {
      border: 1.5px solid #1f78826e;
      background-color: #fff;
      outline: 0;
      box-shadow: 0 0 0 0.075rem #1f788262;
   }
/* End Final */

/* Transition */
   .pop-enter-active,
   .pop-leave-active {
      transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
   }
   .pop-enter,
   .pop-leave-to {
      opacity: 0;
      transform: scale(0.3) translateY(-50%);
   }

   .fade-enter-active,
   .fade-leave-active {
      transition: opacity .4s linear;
   }
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }

   .bounce-enter-active {
      animation: bounce-in .3s;
   }
   .bounce-leave-active {
      animation: bounce-in .3s reverse;
   }
   @keyframes bounce-in {
      0% {
         transform: scale(0);
      }
      50% {
         transform: scale(1.1);
      }
      100% {
         transform: scale(1);
      }
   }
/* End Transition */


/* Laporan */
  #tripwe-table .title-alt {
      margin-top: -30px !important;
      margin-bottom: 24px !important;
      text-align: center;
      color: var(--white);
      font-size: 15px;
      font-weight: 500;
   }
   @media (max-width: 850px) {
      #tripwe-table .title-alt {
         margin-top: 20px !important;
         margin-bottom: -0px !important;
      }
   }
   #tripwe-table .badge-warning {
      background-color: #ffd22f;
   }
   #tripwe-table .ic_print_laporan path {
      fill: #1f7882;
   }
   #tripwe-table .ic_print_laporan path:hover {
      fill: #19636c;
   }
/* End Laporan */

.icon-aksi {
    cursor: pointer;
   }

.nav-dock .item {
  cursor: pointer !important;
}
.nav-dock .item .btn-dock:hover{
  transition: 0.2s ease-in-out;
  transform: scale(1.2);
}

.compt-table .title {
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-top: -28px;
}

.moveUp-enter-active {
  animation: fadeIn 0.5s ease-in ;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.1s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
.swal2-popup {
  border-radius: 20px !important;
}

.swal2-content {
  color:#f00 !important;
}

.swal2-actions .swal2-confirm {
  background: #1f7882 !important;
  border-radius: 17px !important;
}
.swal2-actions .swal2-cancel {
  background: #d33 !important;
  border-radius: 17px !important;
}

/* style Modal Bank sweetalert */
.alert-index {
   z-index: 10000 !important;
}

.table-hover tbody tr:hover {
  background-color: #1f788234;
}
</style>