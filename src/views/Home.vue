<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1> NASA <img alt="Vue logo" src="../assets/logo.png"> UE</h1>
      </div>
    </div>
    <div class="row">
      <Search></Search>
    </div>
    <div class="col-12 border border-dark">
      <image-details></image-details>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Search from '@/components/Search.vue'
  import ImageDetails from '@/components/ImageDetails.vue'
  export default {
    name: 'home',
    components: {
      Search,
      // Image,
      ImageDetails
    }
  }
</script>