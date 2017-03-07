import {types} from './mutations';

export const savePrincipal = ({ commit }, principal) => {
  commit(types.SAVE_PRINCIPAL, principal);
};

export const saveJwtToken = ({ commit }, jwtToken) => {
  commit(types.SAVE_JWT_TOKEN, jwtToken);
};

export const resetJwtToken = ({ commit }) => {
  commit(types.RESET_JWT_TOKEN);
};
