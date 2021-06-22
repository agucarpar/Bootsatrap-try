<style scoped>
  .background-red{
    background-color: red;
  }
</style>

<template>
  <b-container class="background-red">
    <Header/>
    <Record v-if="showDocument"/>
    <Document/>

  </b-container>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Record from '@/components/tabs/Record.vue'
import Document from '@/components/tabs/Document.vue'
import {mapGetters} from '@/store/store.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      showDocument: this.$store.state.isShowingRecordsComponent
    }
  },
  components: {
    Header,
    Record,
    Document,
  },
  computed: {
    showRecordcomponent: this.$store.state.isShowingRecordsComponent,
    ...mapGetters({
      this.$store.state.isShowingRecordsComponent
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
