<template>
  <div class="ImageDetails mt-3 border border-light">
    <h3 class="title">{{image.title}}</h3>
    <img :src="image.url">
    <h3>{{image.date}}</h3>
    <p>{{image.explanation}}</p>
    <p>{{image.copyright}}</p>
  </div>
</template>


<script>
  export default {
    name: 'ImageDetails',
    data() {
      return {}
    },
    computed: {
      image() {
        return this.$store.state.image
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>
  img {
    height: 100vh;
    width: 90vw;
  }

  .title {
    text-decoration: underline;
  }
</style>