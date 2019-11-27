import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    weatherData: null
  },
  mutations: {
    weatherCondition (state) {
      axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Kumasi&APPID=96d1632471cec46de54c84399839d517')
        .then(response => (state.weatherData = response.data))
    }
  },
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
