import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://127.0.0.1:8000/',
    ChinaCenter: [73,55], //ChinaCenter: [73,55],
    mapScale: 650
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
