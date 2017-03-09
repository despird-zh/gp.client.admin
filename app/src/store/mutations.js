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
  [SAVE_JWT_TOKEN](state, token) {

    if(typeof jwttoken === "string") {
      state.principal.jwttoken = token;
      state.authenticated = true;
    }
    else if(typeof jwttoken === "object") {
      state.principal.subject = token.subject;
      state.principal.jwttoken = token.jwttoken;
      state.authenticated = true;
    }
    
  },
  [SAVE_PRINCIPAL](state, credential) {

    if(typeof jwttoken === "string") {
      state.principal.credential = credential;
    }
    else if(typeof jwttoken === "object") {
      state.principal.credential = credential.password;
      state.principal.subject = credential.subject;
    }

  },
  [RESET_JWT_TOKEN](state) {
    state.principal.subject = '';
    state.principal.jwttoken = BLIND_TOKEN;
    state.authenticated = false;
  }
};
