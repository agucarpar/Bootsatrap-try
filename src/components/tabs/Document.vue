<style scoped>
.document-wrapper {
  height: 50rem;
  overflow-y: auto;
  overflow-x:hidden;
}

</style>


<template>
  <div class="document-wrapper">
        <ContentDocument v-for="(item) in documentMockUp"
        :item="item"
        :key="item.name"
        />
  </div>
</template>

<script>
import ContentDocument from '@/components/documents/ContentDocument.vue'
import {mapState} from 'vuex'
export default {
  name:'Document',
  components: {
    ContentDocument,
  },
  computed: {
    ...mapState([
      'documentMockUp'
    ])
  }
}
</script>