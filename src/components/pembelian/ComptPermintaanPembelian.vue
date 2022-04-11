<template>
   <div id="tripwe-table">
      <div class="compt-permintaan-pembelian">
         <div class="container-fluid">
            <h1 class="title">Daftar Permintaan Pembelian</h1>
            <div class="row mt-4">
               <div class="col-12 col-lg-3">
                  <form action="" class="form-inline form-tabel" id="form-left">
                     <div class="form-group">
                        <label for="no_permintaan">Pencarian</label>
                        <div class="input-group">
                           <input type="text" name="no_permintaan" id="no_permintaan" class="form-control" placeholder="No. Permintaan" />
                           <button type="submit" class="btn"><ion-icon name="search-outline"></ion-icon></button>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="col-12 col-xl-4 col-md-7">
                  <form action="" class="form-tabel" id="form-center">
                     <div class="form-group d-lg-flex mb-0">
                        <label>Tanggal</label>
                        <input type="date" name="date_permintaan_1" id="date_permintaan_1" class="form-control mr-2 date_1" />
                        <input type="date" name="date_permintaan_2" id="date_permintaan_2" class="form-control" />
                     </div>
                  </form>
               </div>
               <div class="col-12 col-xl-5">
                  <form action="" class="form-inline form-tabel float-right" id="form-right">
                     <label for="status">Status</label>
                     <div class="form-check">
                        <input type="checkbox" name="checkbox" id="tutup" class="form-check-input mr-2" />
                        <label for="tutup">Ditutup</label>
                        <input type="checkbox" name="checkbox" id="terima" class="form-check-input mr-2" />
                        <label for="terima">Diterima</label>
                        <input type="checkbox" name="checkbox" id="checkbox" class="form-check-input mr-2" />
                        <label for="checkbox">Diproses</label>
                        <input type="checkbox" name="checkbox" id="menunggu" class="form-check-input mr-2" />
                        <label for="menunggu">Menunggu</label>
                     </div>
                  </form>
               </div>
            </div>
         </div>

         <div class="table-responsive">
            <table class="table table-hover table-bordered">
               <thead>
                  <tr>
                     <td style="width: 2px;"><input type="checkbox" class="align-middle"></td>
                     <td>No</td>
                     <td>No. Permintaan</td>
                     <td>Tgl Permintaan</td>
                     <td>Deskripsi</td>
                     <td>Status</td>
                     <td>Pengguna</td>
                     <td>Cabang</td>
                     <td>No. Persetujuan</td>
                     <td>Catatan Permintaan</td>
                     <td>Tindak Lanjut</td>
                     <td>Disetujui</td>
                     <td>Urgensi</td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
                  <tr>
                     <td class="p-0 text-center">
                        <input type="checkbox" class="align-middle" />
                        </td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'ComptPermintaanPembelian'
}
</script>

<style scoped>
   .compt-permintaan-pembelian .title {
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      margin-top: -28px;
   }
</style>