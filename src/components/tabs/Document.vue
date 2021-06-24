<style scoped>
.document-wrapper {
  height: 50rem;
  overflow: scroll;
}


</style>


<template>
  <!-- <div class="document-wrapper">
    <div v-for="(item, i) in 10000" :key="i">
      <p>Paco {{i}}</p>
    </div>
  </div> -->
  <div>
    <b-card no-body  class="pt-2">
    <b-row class="d-flex align-items-center">
      <b-col md="1">
        <b-icon icon="star-fill" variant="secondary" :font-scale="iconSize"></b-icon>
      </b-col>
      <b-col md="1">
        <b-icon icon="file-earmark-text-fill" variant="primary" :font-scale="iconSize"></b-icon>
      </b-col>
      <b-col md="3">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional
          </b-card-text>
      </b-col>
      <b-col md="3">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional
          </b-card-text>
      </b-col>
      <b-col md="2">
        <p class="text-success"> <i>Completado</i> </p>
      </b-col>
      <b-col md="1">
        <b-icon icon="star-fill" variant="secondary" :font-scale="iconSize"></b-icon>
        <b-icon icon="star-fill" variant="secondary" :font-scale="iconSize"></b-icon>
        <b-icon icon="star-fill" variant="secondary" :font-scale="iconSize"></b-icon>
      </b-col>
      <b-col md="1">
        <b-icon
          v-if="showIconArrowUp"
          icon="chevron-double-down"
          @click="togglingArrowUpDown"
          :font-scale="iconSize"
          variant="secondary"
          v-b-toggle.collapse-2
        ></b-icon>
        <b-icon
          v-else
          icon="chevron-double-up"
          @click="togglingArrowUpDown"
          :font-scale="iconSize"
          variant="secondary"
          v-b-toggle.collapse-2
        ></b-icon>
      </b-col>
    </b-row>
  </b-card>
  <b-collapse id="collapse-2" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
    </b-card>
  </b-collapse>
  </div>
</template>

<script>
export default {
  name:'Document',
  data(){
    return {
      iconSize:1.25,
      showIconArrowUp: true
    }
  },
  methods: {
    togglingArrowUpDown() {
      this.showIconArrowUp = !this.showIconArrowUp
    },
  }
}
</script>