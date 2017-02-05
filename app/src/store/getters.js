export const jwttoken = (state) => {
  return state.principal.jwttoken;
};

export const subject = (state) => {
  return state.principal.subject;
};

export const audience = (state) => {
  return state.audience;
};

export const baseUrl = (state) => {
  return state.baseUrl;
};
