import jwtDecode from 'jwt-decode';

// get original token
const jwttoken = (state) => {
  return state.principal.jwttoken;
};
// get subject
const subject = (state) => {
  return state.principal.subject;
};
// get principal object {subject, password}
const principal = (state) => {
  return state.principal;
};
// get the audience
const audience = (state) => {
  return state.audience;
};
// get server base url
const baseUrl = (state) => {
  return state.baseUrl;
};
// get authencate state true: pass; false not valid
const authenticated = (state) => {
  return state.authenticated;
};
// get the parsed token
const parseToken = (state) => {
  let origin = state.principal.jwttoken;
  let decoded = jwtDecode(origin);

  return decoded;
};
// get token state
const tokenState = (state) => {

  let parseToken = jwtDecode(state.principal.jwttoken);
  let currTimestamp = Math.floor(Date.now() / 1000);

  if (currTimestamp - parseToken.exp < 5 * 60 && currTimestamp - parseToken.exp > 0) {
    return 'TO_BE_EXPIRE';
  } else if (currTimestamp - parseToken.exp >= 5 * 60) {
    return 'EXPIRED';
  }
  return 'NORMAL';

};
// export getters as default

export default { jwttoken, subject, principal, audience, baseUrl, authenticated, parseToken, tokenState };
