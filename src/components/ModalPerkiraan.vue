<template>
   <div class="modal-perkiraan">
      <div class="modal fade" id="modalFormPerkiraan" data-backdrop="static" data-keyboard="false" tabindex="-1">
         <div class="modal-dialog modal-sm">
            <div class="modal-content">
               <div class="modal-header">
               <h5 class="modal-title ml-auto mb-3">{{ title }}</h5>
               <button type="button" class="close pl-0" data-dismiss="modal">
                  <span>&times;</span>
               </button>
               </div>
               <div class="modal-body">
                  <slot></slot>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'ModalPerkiraan',
      props: {
         title: {
            type: String,
            required: true
         }
      },
   }
</script>

<style scoped>
   .modal-content {
      border-radius: 20px;
      padding: 30px;
      color: #3a444e;
   }
   .modal-header {
      padding: 0;
      border-bottom: none;
   }
   .modal-body {
      padding: 0;
   }
</style>