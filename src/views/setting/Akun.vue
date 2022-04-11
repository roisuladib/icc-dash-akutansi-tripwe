<template>
  <div class="setting-akun">
    <Navbar />
    <TabHeader />

    <div id='tripwe-table'>
        <div class='compt-table'>
              <h1 class='title'>My Account</h1>  
        </div>
    </div>

    <div class="container-fluid" id="settings">
      <ul class="nav nav-tabs nav-justified mt-5">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="setActive('pembelian')" :class="{ active: isActive('pembelian') }" href="#pembelian">
            <img src="../../assets/images/il_beli.svg" style="max-width: 20vw; max-height: 20vh;" alt="">
            Pembelian
        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="setActive('penjualan')" :class="{ active: isActive('penjualan') }" href="#penjualan">
            <img src="../../assets/images/il_jual.svg" style="max-width: 20vw; max-height: 20vh;" alt="">
            Penjualan
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="setActive('modal')" :class="{ active: isActive('modal') }" href="#modal">
            <img src="../../assets/images/il_modal.svg" style="max-width: 20vw; max-height: 20vh;" alt="">
            Modal
          </a>
        </li>
      </ul>
      <div class="tab-content py-3">
        <div class="tab-pane fade" :class="{ 'active show': isActive('pembelian') }" id="pembelian">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Kas Pembelian</label>
                <select class="form-control custom-select" v-model="beli.kas">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Hutang Dagang</label>
                <select class="form-control custom-select" v-model="beli.hutang">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Pembelian</label>
                <select class="form-control custom-select" v-model="beli.beli">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Diskon</label>
                <select class="form-control custom-select" v-model="beli.diskon">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>PPN Masukan</label>
                <select class="form-control custom-select" v-model="beli.ppn">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Retur Pembelian</label>
                <select class="form-control custom-select" v-model="beli.retur">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Laba Retur Pembelian</label>
                <select class="form-control custom-select" v-model="beli.labaRetur">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Rugi Retur Pembelian</label>
                <select class="form-control custom-select" v-model="beli.rugiRetur">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('penjualan') }" id="penjualan">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Kas Penjualan</label>
                <select class="form-control custom-select" v-model="jual.kas">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Piutang Dagang</label>
                <select class="form-control custom-select" v-model="jual.piutang">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Penjualan Tunai</label>
                <select class="form-control custom-select" v-model="jual.tunai">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Penjualan Kredit</label>
                <select class="form-control custom-select" v-model="jual.kredit">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Diskon Penjualan</label>
                <select class="form-control custom-select" v-model="jual.diskon">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>PPN Keluaran</label>
                <select class="form-control custom-select" v-model="jual.ppn">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Persediaan</label>
                <select class="form-control custom-select" v-model="jual.persediaan">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>HPP</label>
                <select class="form-control custom-select" v-model="jual.hpp">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Stok Opname Kurang</label>
                <select class="form-control custom-select" v-model="jual.stokKurang">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Stok Opname Lebih</label>
                <select class="form-control custom-select" v-model="jual.stokLebih">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Pemakaian</label>
                <select class="form-control custom-select" v-model="jual.pakai">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Pendapatan Lainnya</label>
                <select class="form-control custom-select" v-model="jual.pendapatan">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Retur Penjualan</label>
                <select class="form-control custom-select" v-model="jual.retur">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Biaya Penjualan</label>
                <select class="form-control custom-select" v-model="jual.biaya">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('modal') }" id="modal">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Laba S/D Tahun Lalu</label>
                <select class="form-control custom-select" v-model="modal.thLalu">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Laba Tahun Berjalan</label>
                <select class="form-control custom-select" v-model="modal.thJalan">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-xl-4">
              <div class="form-group">
                <label>Laba Periode Berjalan</label>
                <select class="form-control custom-select" v-model="modal.periodeJalan">
                  <option v-for="data in dataAkun" :key="data.nomor" :value="data.nomor">{{ data.desk }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2 offset-sm-5">
          <button @click="saveAkun" type="button" class="btn btn-warning btn-block" id="save">
            <div v-if="loading" class="spinner-border spinner-border-sm"></div>
            Simpan
          </button>
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
      key: JSON.parse(sessionStorage.getItem('userLogin')),
      activeItem: 'pembelian',
      settings: [],
      dataAkun: [],
      loading: false,
      beli: {
        kas: '',
        hutang: '',
        beli: '',
        diskon: '',
        ppn: '',
        retur: '',
        labaRetur: '',
        rugiRetur: '',
      },
      jual: {
        kas: '',
        piutang: '',
        tunai: '',
        kredit: '',
        diskon: '',
        ppn: '',
        persediaan: '',
        hpp: '',
        stokKurang: '',
        stokLebih: '',
        pakai: '',
        pendapatan: '',
        retur: '',
        biaya: '',
      },
      modal: {
        thLalu: '',
        thJalan: '',
        periodeJalan: '' 
      },
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    async getAll() {
      await axios
        .post('https://api.saebo.id/trip/settingpos/datapos', qs.stringify({
          idlog: this.key.idlog,
          user: this.key.userkey,
          token: this.key.token,
        }))
        .then(res => {
          if (res.data.status == 102) {
            this.beli.kas = res.data.data.beli_kas; 
            this.beli.hutang = res.data.data.hutangdagang; 
            this.beli.beli = res.data.data.pembelian
            this.beli.diskon =  res.data.data.beli_discount; 
            this.beli.ppn =  res.data.data.ppnmasukan; 
            this.beli.retur = res.data.data.returbeli;  
            this.beli.labaRetur =  res.data.data.rbeli_laba; 
            this.beli.rugiRetur =  res.data.data.rbeli_rugi; 

            this.jual.kas =  res.data.data.jual_kas; 
            this.jual.piutang =  res.data.data.piutangdagang; 
            this.jual.tunai =  res.data.data.jualtunai; 
            this.jual.kredit =  res.data.data.jualkredit; 
            this.jual.diskon =  res.data.data.jual_discount; 
            this.jual.ppn =  res.data.data.ppnkeluaran; 
            this.jual.persediaan =  res.data.data.persediaan; 
            this.jual.hpp = res.data.data.hpp; 
            this.jual.stokKurang =  res.data.data.opname_fisik_kurang; 
            this.jual.stokLebih =  res.data.data.opname_fisik_lebih; 
            this.jual.pakai = res.data.data.pemakaian; 
            this.jual.pendapatan =  res.data.data.jual_lain; 
            this.jual.retur = res.data.data.returjual; 
            this.jual.biaya = res.data.data.jual_biaya; 

            this.modal.thLalu =  res.data.data.labatahunlalu; 
            this.modal.thJalan =  res.data.data.labatahunberjalan; 
            this.modal.periodeJalan = res.data.data.lababulanberjalan; 
            this.editData = res.data.data.edit; 
            this.id = res.data.data.id; 
          }
          else {
            return this.$toasted.error(res.data.message, {
                theme: 'bubble',
                duration: '4000',
            });
          }
        }).catch(err => console.log(err));
    },
    async master() {
      await axios
        .post('https://api.saebo.id/trip/api/datamaster', qs.stringify({
            idlog    : this.key.idlog,
            user     : this.key.userkey,
            token    : this.key.token,
        })).then(res => this.dataAkun = res.data.dataakun).catch(err => console.log(err));
    },
    async saveAkun() {
      this.loading = true;
      document.querySelector('#save').disabled = true;
      await axios
        .post('https://api.saebo.id/trip/settingpos/simpandata', qs.stringify({
            idlog    : this.key.idlog,
            user     : this.key.userkey,
            token    : this.key.token,
            id       : 1,
            jenis    : 'editdata',

            belikas  : this.beli.kas,
            belihutang  : this.beli.hutang,
            beli  : this.beli.beli,
            belidiskon  : this.beli.diskon,
            belippn  : this.beli.ppn,
            beliretur  : this.beli.retur,
            belilabaretur  : this.beli.labaRetur,
            belirugiretur  : this.beli.rugiRetur,

            jualkas: this.jual.kas,
            jualpiutang: this.jual.piutang,
            jualtunai: this.jual.tunai,
            jualkredit: this.jual.kredit,
            jualdiskon: this.jual.diskon,
            jualppn: this.jual.ppn,
            jualpersediaan: this.jual.persediaan,
            jualhpp: this.jual.hpp,
            jualstokkurang: this.jual.stokKurang,
            jualstoklebih: this.jual.stokLebih,
            jualpakai: this.jual.pakai,
            jualpendapatan: this.jual.pendapatan,
            jualretur: this.jual.retur,
            jualbiaya: this.jual.biaya,

            modalthlalu: this.modal.thLalu,
            modalthjalan: this.modal.thJalan,
            modalperiodejalan: this.modal.periodeJalan
        }))
        .then(res => {
          if (res.data.status == 102) {
            this.$fire({
              title: res.data.message,
              type: 'success',
              showConfirmButton: false,
              position: 'top'
            });
            this.loading = false;
            document.querySelector('#save').disabled = false;
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
            }) ;
            this.loading = false;
            document.querySelector('#btnSimpanPerk').disabled = false;
          }
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    document.title = 'Jurnal Tripwe || Settings Akun Jurnal'
    this.getAll();
    this.master();
  }
}
</script>

<style scoped>
  .form-group .form-control{
    border-radius: 12px;
  }
  #save {
    border-radius: 12px;
  }
  #settings .nav-tabs {
    border-bottom: none;
  }
  #settings .nav-link {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    border: 1px solid #a2d450;
    border-radius: 30px 0;
  }
  #settings .nav-link:hover {
    border: 1px solid #fff;
  }
  #settings .nav-link.active{
    color: #1f7882;
  }
</style>