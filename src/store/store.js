import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isShowRecordComponent: true,
    isShowDocumentsComponent: false,
    documentMockUp: [
      {
      completed: true,
      description: "This is a description of the document",
      dateCreation: new Date().toISOString().slice(0, 10),
      fontEvaluation: "Evaluación",
      icons: {origen: true, link: true},
      name: "test Documen2",
      origen: "De donde se supone que viene el documento",
      restrictions: "How many?",
      tag: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3", "Etiqueta 4", "Etiqueta 5", "Etiqueta 6", "Etiqueta 7"],
      template:"Nombre plantilla",
      },
      {
      completed: true,
      description: "This is a description of the document",
      dateCreation: new Date().toISOString().slice(0, 10),
      fontEvaluation: "Evaluación",
      icons: {origen: true, link: true},
      name: "test Document1",
      origen: "De donde se supone que viene el documento",
      restrictions: "How many?",
      tag: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3", "Etiqueta 4", "Etiqueta 5", "Etiqueta 6", "Etiqueta 7"],
      template:"Nombre plantilla",
      },
    ]
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