<template>
  <div class="laporan">
    <Navbar />
    <TabHeader />

     <div class="container-fluid" id="tab-content-1">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-6 col-md-5 col-lg-6">
                <div class="row justify-content-center">
                  <div class="col-sm">
                      <ul class="nav nav-pills mb-3" id="pills-tab">
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
                            <router-link to="/laporan-keuangan" class="nav-link">
                              <ion-icon name="logo-usd"></ion-icon>
                              Keuangan
                            </router-link>
                        </li>
                      </ul>
                      <div class="tab-content" id="tab-content-2">
                        <div class="tab-pane fade" id="pesanan">
                            <div class="row">
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-pesanan-rental">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Rental</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
                              </div>
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-pesanan-safari">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Safari</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
                              </div>
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-pesanan-onroad">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Onroad</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
                              </div>
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-pesanan-offroad">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Offroad</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
                              </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="penjualan">
                            <div class="row">
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-penjualan-rental">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Rental</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
                              </div>
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-penjualan-safari">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Safari</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
                              </div>
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-penjualan-onroad">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Onroad</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
                              </div>
                              <div class="col-6 col-xl-3">
                                  <router-link to="/laporan-penjualan-offroad">
                                    <div class="menus">
                                        <div class="media">
                                          <img src="../../assets/images/ic_ph.png" class="align-middle align-self-center">
                                          <div class="media-body">
                                              <p class="title mb-0 mt-2">Offroad</p>
                                          </div>
                                        </div>
                                    </div>
                                  </router-link>
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
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';

export default {
  name: 'Laporan',
  components: {
    Navbar,
    TabHeader,
  },
  created() {
    document.title = 'Tripwe jurnal | Laporan'
  }
}
</script>