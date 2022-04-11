<template>
  <div class="settings">
    <Navbar />
    <TabHeader />

    <div id='tripwe-table'>
        <div class='compt-table'>
          <div class='container-fluid'>
              <h1 class='title'>My Account</h1>               
              <div class='row mt-4'>
                <div class='col-12'>
                    <div class='form-inline form-tabel' id="form-center">
                      <label>Periode</label>
                      <div class="input-group">
                           <VueDatePicker no-calendar-icon fullscreen-mobile :color="color" no-header format="DD / MM / YYYY" :visible="isVisible2" @onClose="isVisible2 = false" v-model="date" @input="getAll" />
                           <div class="vd-picker__input-icon">
                              <div class="vd-picker__input-icon__wrapper">
                                 <span>
                                    <input type="checkbox" class="date mt-1" id="isVisible2" name="isVisible2" v-model="isVisible2">
                                 </span>
                                 <span aria-hidden="true" class="vd-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="16" width="16" role="img" aria-hidden="true" data-icon="calendarAlt">
                                       <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
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
                      <td>Nama</td>
                      <td>Telepon</td>
                      <td>Virtual Account</td>
                    </tr>
                </thead>
                <tbody v-if="settings.length > 0">
                    <tr v-for='(data, index) in settings' :key='data.id'>
                      <td class='text-center px-1'>{{ index + 1 }}.</td>
                      <td>{{ data.nama }}</td>
                      <td>{{ data.telp }}</td>
                      <td>{{ data.va }}</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr><td colspan="12" class="text-center">Data Kosong</td></tr>
                    <tr>
                      <td colspan="12" class="text-center">
                          <div class="text-center">
                            <img src="../../assets/images/ilus_tripwe_2.svg" width="55%" class="mt-3" alt="Tripwe Jurnal">
                          </div>
                      </td>
                    </tr>
                </tbody>
              </table>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TabHeader from '@/components/TabHeader.vue';
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'Setting',
  components: {
    Navbar,
    TabHeader
  },
  data() {
    return {
      settings: [],
      date: new Date().toISOString().slice(0, 10),
      isVisible1: false,
      isVisible2: false,
      color: '#1f7882'
    }
  },
  methods: {
    async getAll() {
      const key = JSON.parse(sessionStorage.getItem('userLogin'));
      await axios
        .post('https://api.saebo.id/trip/setting/datasetting', qs.stringify({
          idlog: key.idlog,
          user: key.userkey,
          token: key.token,
        }))
        .then(res => {
          if (res.data.status == 102) {
            this.settings = res.data.data;
          }
          else {
            return this.$toasted.error(res.data.message, {
                theme: 'bubble',
                duration: '4000',
            });
          }
        }).catch(err => console.log(err));
    }
  },
  created() {
    document.title = 'Jurnal Tripwe || Settings'
    this.getAll();
  }
}
</script>