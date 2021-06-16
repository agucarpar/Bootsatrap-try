<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
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
