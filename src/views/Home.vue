<template>
  <div class="home">
    <Navbar />
    <TabContent />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import TabContent from '@/components/TabContent.vue'
  export default {
    name: 'Home',
    components: {
      Navbar,
      TabContent,
    },
    created() {
    document.title = 'Tripwe jurnal | Dashboard'
  }
  }
</script>
