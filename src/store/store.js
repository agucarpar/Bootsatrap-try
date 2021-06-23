import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isShowRecordComponent: true,
    isShowDocumentsComponent: false,
  },
  mutations: {

    showRecordComponent(context) {
      context.isShowDocumentsComponent = false
      context.isShowRecordComponent = true
    },
    showDocumentComponent(context) {
      context.isShowRecordComponent = false
      context.isShowDocumentsComponent = true
    },
  },

  actions: {
    actionShowRecordComponent({commit}) {
      commit('showRecordComponent')
    },
    actionShowDocumentComponent({commit}) {
      commit('showDocumentComponent')
    },
  }
})