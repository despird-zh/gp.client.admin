import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';

import * as actions from './actions';
import * as getters from './getters';
import { state, mutations } from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const plugins = debug ? [createLogger()] : [];

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [
    createPersistedState({ storage: window.sessionStorage }),
    ...plugins
  ],
  strict: debug
});
