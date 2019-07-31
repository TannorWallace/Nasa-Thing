<template>
  <div class="search col-12">
    <form @submit.prevent="search">
      <label for="search">Search</label>
      <input name="search" type="text" placeholder="YYYY-MM-DD" v-model="query">
      <button class="btn btn-warning" type="submit">Engage</button>
    </form>

  </div>
</template>


<script>
  export default {
    name: 'search',
    data() {
      return {
        query: ""
      }
    },
    computed: {},
    methods: {
      search() {
        this.$store.dispatch("search", this.query)
      }
    },
    components: {

    }
  }
</script>


<style scoped>

</style>