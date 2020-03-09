import Vue from 'vue'
import Vuex from 'vuex'
import ageOfEmpireUnits from '../age-of-empires-units.json'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    units: ageOfEmpireUnits.units
  },
})
export default store;