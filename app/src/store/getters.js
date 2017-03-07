export const jwttoken = (state) => {
  return state.principal.jwttoken;
};

export const subject = (state) => {
  return state.principal.subject;
};

export const principal = (state) => {
  return state.principal;
};

export const audience = (state) => {
  return state.audience;
};

export const baseUrl = (state) => {
  return state.baseUrl;
};

export const authenticated = (state) => {
  return state.authenticated;
};
