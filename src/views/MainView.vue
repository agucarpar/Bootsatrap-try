<style scoped>
  .background-red{
    background-color: red;
  }
</style>

<template>
  <b-container class="background-red">
    <Header/>
    <Record/>
    <Document/>

  </b-container>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Record from '@/components/tabs/Record.vue'
import Document from '@/components/tabs/Document.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  components: {
    Header,
    Record,
    Document,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
