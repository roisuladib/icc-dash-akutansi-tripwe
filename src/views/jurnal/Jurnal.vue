<template>
  <div class="settings">
    <Navbar />
    <TabHeader />

    <div class="container-fluid" id="tab-content-1">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3">
              <div class="row justify-content-center">
                <div class="col-sm">
                    <ul class="nav nav-pills mb-3" id="pills-tab">
                      <li class="nav-item mx-auto">
                          <router-link to="/jurnal-umum" class="nav-link" data-toggle="pill">
                            <ion-icon name="clipboard-outline"></ion-icon>
                            Umum
                          </router-link>
                      </li>
                      <li class="nav-item mx-auto">
                          <router-link to="/jurnal-penyesuaian" class="nav-link" data-toggle="pill">
                            <ion-icon name="cafe-outline"></ion-icon>
                            Penyesuaian
                          </router-link>
                      </li>
                    </ul>
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
  name: 'Settings',
  components: {
    Navbar,
    TabHeader
  },
  created() {
    document.title = 'Tripwe jurnal | Jurnals'
  }
}
</script>