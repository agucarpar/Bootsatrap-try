<style scoped>

</style>
<template>
  <b-container>
      <TopRow/>
    <b-row>
      <BottomRow/>
    </b-row>
  </b-container>
</template>

<script>
import BottomRow from '@/components/header/BottomRow.vue'
import TopRow from '@/components/header/TopRow.vue'
export default {
  name:"Header",
  components: {
    BottomRow,
    TopRow
  },
}
</script>