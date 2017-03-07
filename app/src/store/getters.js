import jwtDecode from 'jwt-decode';
// get original token
export const jwttoken = (state) => {
  return state.principal.jwttoken;
};
// get subject
export const subject = (state) => {
  return state.principal.subject;
};
// get principal object {subject, password}
export const principal = (state) => {
  return state.principal;
};
// get the audience
export const audience = (state) => {
  return state.audience;
};
// get server base url
export const baseUrl = (state) => {
  return state.baseUrl;
};
// get authencate state true: pass; false not valid
export const authenticated = (state) => {
  return state.authenticated;
};
// get the parsed token
export const parseToken = (state) => {
  let origin = state.principal.jwttoken;
  let decoded = jwtDecode(origin);

  return decoded;
};
