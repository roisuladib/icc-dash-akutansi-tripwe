<template>
   <div class="my-tab">
      <nav>
         <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-link active align-self-center" data-toggle="tab" href="#pintasan">
               <ion-icon name="bookmarks"></ion-icon>
               Pintasan
            </a>
            <a class="nav-link align-self-center" data-toggle="tab" href="#dashboard">
               <ion-icon name="grid"></ion-icon>
               Dashboard
            </a>        
         </div>
      </nav>
      <div class="tab-content" id="tab-content-1">
         <div class="tab-pane fade show active" id="pintasan">
            <div class="container-fluid">
               <div class="row justify-content-center">
                  <div class="col-sm-7">
                     <div class="row justify-content-center">
                        <div class="col-sm">
                           <ul class="nav nav-pills mb-3" id="pills-tab">
                              <li class="nav-item mx-auto">
                                 <router-link to="/bank" class="nav-link">
                                    <ion-icon name="card-outline"></ion-icon>
                                    Bank
                                 </router-link>
                              </li>
                              <li class="nav-item mx-auto">
                                 <router-link to="/pelanggan" class="nav-link">
                                    <ion-icon name="happy-outline"></ion-icon>
                                    Pelanggan
                                 </router-link>
                              </li>
                              <li class="nav-item mx-auto">
                                 <router-link to="/cabang" class="nav-link">
                                    <ion-icon name="golf-outline"></ion-icon>
                                    Merchant
                                 </router-link>
                              </li>
                              <li class="nav-item mx-auto">
                                 <a class="nav-link" data-toggle="pill" href="#pesanan">
                                    <ion-icon name="cart-outline"></ion-icon>
                                    Pesanan
                                 </a>
                              </li>
                              <li class="nav-item mx-auto">
                                 <a class="nav-link" data-toggle="pill" href="#penjualan">
                                    <ion-icon name="bar-chart-outline"></ion-icon>
                                    Penjualan
                                 </a>
                              </li>
                              <li class="nav-item mx-auto">
                                 <router-link to="/perkiraan" class="nav-link" data-toggle="pill">
                                    <ion-icon name="calculator-outline"></ion-icon>
                                    Perkiraan
                                 </router-link>
                              </li>
                           </ul>
                           <div class="tab-content" id="tab-content-2">
                              <div class="tab-pane fade" id="pembelian">
                                <div class="row">
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/permintaan-pembelian" href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Permintaan <br> Pembelian</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/pesanan-pembelian" href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Pesanan <br> Pembelian</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/penerimaan-barang" href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Penerimaan <br> Barang</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Faktur <br> Pembelian</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Pembayaran <br> Pembelian</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Return <br> Pembelian</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="pesanan">
                                 <div class="row">
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/pesanan-rental">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Rental</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/pesanan-safari">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Safari</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/pesanan-onroad">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Onroad</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/pesanan-offroad">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Offroad</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/semua-pesanan" href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Semua <br> Pesanan</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="penjualan">
                                 <div class="row">
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/penjualan-rental">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Rental</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/penjualan-safari">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Safari</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/penjualan-onroad">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Onroad</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <router-link to="/penjualan-offroad">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title mb-0 mt-2">Offroad</p>
                                                </div>
                                             </div>
                                          </div>
                                       </router-link>
                                    </div>
                                 </div>
                              </div>
                              <div class="tab-pane fade" id="persediaan">
                                 <div class="row">
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Penyesuian <br> Barang</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Pembiayaan <br> Pesanan</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Barang</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Pindah <br> Barang</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                    <div class="col-6 col-md-3 col-xl-4">
                                       <a href="#">
                                          <div class="menus">
                                             <div class="media">
                                                <img src="../assets/images/ic_ph.png" class="align-middle align-self-center">
                                                <div class="media-body">
                                                   <p class="title">Pengelompokan <br> Barang</p>
                                                </div>
                                             </div>
                                          </div>
                                       </a>
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
         <div class="tab-pane fade" id="dashboard">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-6 col-lg-9">
                     <h1 class="title">Dashboard</h1>
                  </div>
                  <div class="col-6 col-lg-3">
                     <div class="info text-right d-flex">   
                        <form action="" class="form-inline">
                           <div class="input-group">
                              <VueDatePicker fullscreen-mobile :color="color" no-header format="DD / MM / YYYY" v-model="dateDashboard" />
                              <button type="reset" class="btn tripwe-btn-sm ml-2" ><img src="../assets/images/ic_refresh.png" width="14" alt=""></button>
                           </div>
                        </form>
                        <button class="btn tripwe-btn-sm ml-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512"><title>ionicons-v5-n</title><path d="M296,464a23.88,23.88,0,0,1-7.55-1.23l-80.15-26.67A23.92,23.92,0,0,1,192,413.32V294.11a.44.44,0,0,0-.09-.13L23.26,97.54A30,30,0,0,1,46.05,48H466a30,30,0,0,1,22.79,49.54L320.09,294a.77.77,0,0,0-.09.13V440a23.93,23.93,0,0,1-24,24Z"/></svg>
                        </button>
                     </div>
                  </div>
                  <div class="col-12 col-md-5">
                     <div class="row" id="col-left">
                        <div class="col-6">
                           <div class="dashboard-card-sm">
                           </div>
                        </div>
                        <div class="col-6">
                           <div class="dashboard-card-sm">
                           </div>
                        </div>
                        <div class="col-6">
                           <div class="dashboard-card-sm">
                           </div>
                        </div>
                        <div class="col-6">
                           <div class="dashboard-card-sm">
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-md-7 pl-10">
                     <div class="dashboard-card-lg"></div>
                  </div>
                  <div class="col-12 col-md-8 pr-10">
                     <div class="dashboard-card-lg"></div>
                  </div>
                  <div class="col-12 col-md-4 pl-10">
                     <div class="dashboard-card-lg"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'TabContent',
   data() {
      return {
         dateDashboard: new Date().toISOString().slice(0, 10),
         color: '#1f7882'
      }
   }
}
</script>