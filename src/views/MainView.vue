<style scoped>
  .background-red{
    background-color: red;
  }
</style>

<template>
  <b-container class="background-red">
    <Header/>
    <Document v-if="isShowDocumentsComponent"/>
    <Record  v-if="isShowRecordComponent"/>

  </b-container>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Record from '@/components/tabs/Record.vue'
import Document from '@/components/tabs/Document.vue'
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  components: {
    Header,
    Record,
    Document,
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState([
      'isShowRecordComponent',
      'isShowDocumentsComponent'
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
