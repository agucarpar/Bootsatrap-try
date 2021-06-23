import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isShowingRecordsComponent: true,
    isShowingDocumentsComponent: true,
    counter: 1,
  },
})