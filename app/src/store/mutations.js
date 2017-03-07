const SAVE_JWT_TOKEN = 'SAVE_JWT_TOKEN';
const RESET_JWT_TOKEN = 'RESET_JWT_TOKEN';
const SAVE_PRINCIPAL = 'SAVE_PRINCIPAL';
const BLIND_TOKEN = '__blind_token__';

// declare the types of mutations
export const types = {
  SAVE_JWT_TOKEN,
  SAVE_PRINCIPAL,
  RESET_JWT_TOKEN
};
// declare the state structure
export const state = {
  baseUrl: 'http://localhost:8010/gpapi/',
  audience: 'gp_client',
  authenticated: false,
  principal: {
    subject: 'dev1',
    credential: '1',
    jwttoken: BLIND_TOKEN
  }
};
// declare the mutations over state.
export const mutations = {
  [SAVE_JWT_TOKEN](state, {subject, jwttoken }) {
    state.principal.subject = subject;
    state.principal.jwttoken = jwttoken;
    state.authenticated = true;
  },
  [SAVE_PRINCIPAL](state, {subject, password}) {
    state.principal.credential = password;
    state.principal.subject = subject;
  },
  [RESET_JWT_TOKEN](state) {
    state.principal.subject = '';
    state.principal.jwttoken = BLIND_TOKEN;
    state.authenticated = false;
  }
};
