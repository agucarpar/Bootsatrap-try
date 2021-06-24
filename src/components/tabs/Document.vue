<style scoped>
.document-wrapper {
  height: 50rem;
  overflow: scroll;
}

b-row, .text-secondary {
  font-size: 75%
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
        <b-icon icon="star-fill" :font-scale="iconSize" variant="secondary" ></b-icon>
      </b-col>
      <b-col md="1">
        <b-icon icon="file-earmark-text-fill" :font-scale="iconSize" variant="primary" ></b-icon>
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
        <i class="text-success">Completado</i>
      </b-col>
      <b-col md="1">
        <b-link>
          <b-icon
            class="ml-1"
            icon="star-fill"
            variant="primary"
            :font-scale="iconSize"
            ></b-icon>
          </b-link>
        <b-link>
          <b-icon
            class="ml-1"
            icon="star-fill"
            variant="primary"
            :font-scale="iconSize"
           ></b-icon>
          </b-link>
        <b-link>
          <b-icon
            icon="star-fill"
            variant="primary"
            :font-scale="iconSize"
            ></b-icon>
          </b-link>
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
      <b-row class="d-flex align-items-center">
        <b-col md="1">
          <b-icon icon="file-earmark-text-fill" :font-scale="iconBigSize" variant="secondary" ></b-icon>
        </b-col>
        <b-col md="4">
          <div>
            <b-row class="text-secondary">Origen</b-row>
            <b-row class="fw-bold">Manolo</b-row>
          </div>
          <div>
            <b-row class="text-secondary">Evaluación de la Fuente</b-row>
            <b-row class="fw-bold">Manolo</b-row>
          </div>
        </b-col>
        <b-col md="3">
          <div>
            <b-row b-row class="text-secondary">Plantilla utilizada</b-row>
            <b-row b-row class="fw-bold">Manolo</b-row>
          </div>
          <div>
            <b-row class="text-secondary">Fecha de creación</b-row>
            <b-row class="fw-bold">Manolo</b-row>
          </div>
        </b-col>
        <b-col md="4">
          <div>
            <b-row class="text-secondary">
              <p class="text-start p-0">
                Restricciones del documento
                <span><b-link>Ver</b-link></span>
              </p>
              </b-row>
            <b-row class="fw-bold">Manolo</b-row>
          </div>
          <div>
            <b-row class="text-secondary">Etiquetas del documento</b-row>
            <b-row class="fw-bold">Manolo</b-row>
          </div>
        </b-col>
      </b-row>
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
      iconBigSize:6,
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