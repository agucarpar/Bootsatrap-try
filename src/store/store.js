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
      context.isShowRecordComponent = true
    },
    hideRecordComponent(context) {
      context.isShowRecordComponent = false
    },
    showDocumentComponent(context) {
      context.isShowDocumentsComponent = true
    },
    hideDocumentComponent(context) {
      context.isShowDocumentsComponent = false
    },
  },

  actions: {
    actionShowRecordComponent({commit}) {
      commit('hideDocumentComponent')
      commit('showRecordComponent')
    },
    actionShowDocumentComponent({commit}) {
      commit('hideRecordComponent')
      commit('showDocumentComponent')
    },
  }
})