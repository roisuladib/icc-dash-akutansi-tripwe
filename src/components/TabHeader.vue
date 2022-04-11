<template>
   <div class="my-header">
      <nav>
         <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <router-link to="/" class="nav-link align-self-center" data-toggle="tab" href="#pintasan">
               <ion-icon name="bookmarks"></ion-icon>
               Pintasan
            </router-link>
            <router-link to="/" class="nav-link align-self-center" data-toggle="tab" href="#dashboard">
               <ion-icon name="grid"></ion-icon>
               Dashboard
            </router-link>        
         </div>
      </nav>
   </div>
</template>

<script>
export default {
   name: 'TabHeader'
}
</script>