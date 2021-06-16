<style scoped>
  .background-red{
    background-color: red;
  }
</style>

<template>
  <b-container class="background-red">
    <Header/>
  </b-container>
</template>

<script>
import Header from '@/components/header/Header.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
