import {types} from './mutations';

export const saveJwtToken = ({ commit }, jwtToken) => {
  commit(types.SAVE_JWT_TOKEN, jwtToken);
};
