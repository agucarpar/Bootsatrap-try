<template>
  <div>
    <b-navbar toggleable="lg" class="justify-content-between">
      <b-navbar-nav>

        <b-nav-item  @click="showRecordsComponent()">Expedientes ({{0}})</b-nav-item>
        <b-nav-item @click="showDocumentsComponent()">Documentos ({{0}})</b-nav-item>


      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

          <p class="mb-0 info" @click="togglingArrowUpDown" v-b-toggle.collapse-1>
            Desplegar todo
            <b-icon v-if="showIconArrowUp" icon="chevron-double-up" aria-hidden="true"></b-icon>
            <b-icon v-else icon="chevron-double-down" aria-hidden="true"></b-icon>
          </p>
      </b-navbar-nav>
  </b-navbar>
  <b-collapse id="collapse-1" >
      <b-card>
        <div class="card-text">
          <CollapsableContent/>
        </div>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import CollapsableContent from '@/components/header/CollapsableContent.vue'
import { mapActions } from 'vuex'

export default {
  name:"BottomRow",
  components: {
    CollapsableContent,
  },
  data() {
    return {
      showIconArrowUp: false,
    }
  },

    methods: {
    ...mapActions([
      'actionShowRecordComponent',
      'actionShowDocumentComponent',
    ]),
    showRecordsComponent() {
      this.actionShowRecordComponent()
    },
    showDocumentsComponent() {
      this.actionShowDocumentComponent()
    },
    togglingArrowUpDown() {
      this.showIconArrowUp = !this.showIconArrowUp
    },
    trytin() {
    }
  }
}
</script>