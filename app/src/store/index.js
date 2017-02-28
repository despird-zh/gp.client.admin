import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import * as actions from './actions';
import * as getters from './getters';
import { state, mutations } from './mutations';
//import createLogger from 'vuex/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [
    createPersistedState({ storage: window.sessionStorage })
  ],
  strict: debug
});
