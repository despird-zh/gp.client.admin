const SAVE_JWT_TOKEN = 'SAVE_JWT_TOKEN';
const RESET_JWT_TOKEN = 'RESET_JWT_TOKEN';
const SAVE_PRINCIPAL = 'SAVE_PRINCIPAL';

export const types = {
  SAVE_JWT_TOKEN,
  SAVE_PRINCIPAL,
  RESET_JWT_TOKEN
};

export const state = {
  baseUrl: 'http://localhost:8010/gpapi/',
  audience: 'gp_client',
  authenticated: false,
  principal: {
    subject: 'dev1',
    credential: '1',
    jwttoken: '__blind_token__'
  }
};

export const mutations = {
  [SAVE_JWT_TOKEN](state, {subject, jwttoken }) {
    state.principal.subject = subject;
    state.principal.jwttoken = jwttoken;
    state.authenticated = true;
  },
  [SAVE_PRINCIPAL](state, {subject, password}) {
    state.principal.credential = password;
    state.principal.subject = subject;
  }
};
