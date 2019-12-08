import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { createPersistedState } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    weatherCondition: []
  },
  actions: {
    loadWeatherInfo ({commit}) {
      axios
        .get('http://api.openweathermap.org/data/2.5/forecast?q=Kumasi&APPID=96d1632471cec46de54c84399839d517')
        .then(response => {
          console.log(response)
          commit('SET_WEATHER', response)
        })
        .catch(error => console.log('failed to load api' + error))
    }
  },
  mutations: {
    SET_WEATHER (state, conditions) {
      state.weatherCondition = conditions
    }
  },
  plugins: [
    createPersistedState()
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
