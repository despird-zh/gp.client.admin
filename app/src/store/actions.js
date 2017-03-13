import Vue from 'vue';
import {types} from './mutations';

const savePrincipal = ({ commit }, principal) => {
  commit(types.SAVE_PRINCIPAL, principal);
};

const saveJwtToken = ({ commit }, jwtToken) => {
  commit(types.SAVE_JWT_TOKEN, jwtToken);
};

const resetJwtToken = ({ commit }) => {
  commit(types.RESET_JWT_TOKEN);
};

const reIssueToken = ({ commit, state }, {apiName, requestBody}) => {

  return new Promise((resolve, reject) => {

    let _options = {
    	headers: {
      Authorization: 'Bearer: ' + state.principal.jwttoken,
      Accept: 'application/json'
    }
   	};
   	let _url = state.baseUrl + 'reissue.do';

    Vue.http.get(_url, _options).then(
      (response) => {
        let respdata = response.body;

        if (respdata.meta.state === 'success') {

          commit(types.SAVE_JWT_TOKEN, respdata.data);

          _options.headers.Authorization = 'Bearer: ' + respdata.data;
          Vue.http.post(state.baseUrl + apiName, requestBody, _options).then(
            (response) => {
              resolve(response);
            },
            (response) => {
              reject(response);
            });
        } else {
          reject(response);
        }
      },
      (response) => {
        reject(response);
      }
    );
  });
};

const reFetchToken = ({ commit, state }, {apiName, requestBody}) => {
  return new Promise((resolve, reject) => {

    let authenBody = {
      principal: state.principal.subject,
      credential: state.principal.credential,
      audience: state.audience
    };
    let _url = state.baseUrl + 'authenticate.do';

    Vue.http.post(_url, authenBody).then(
      (response) => {
        let respdata = response.body;

        if (respdata.meta.state === 'success') {
          commit(types.SAVE_JWT_TOKEN, respdata.data);

          let _options = {
			    	headers: {
			          Authorization: 'Bearer: ' + respdata.data,
			          Accept: 'application/json'
			        }
			   	};

          Vue.http.post(state.baseUrl + apiName, requestBody, _options).then(
            (newresponse) => {
              resolve(newresponse);
            },
            (newresponse) => {
              reject(newresponse);
            });
        } else {
          reject(response);
        }

      }, (response) => {
      	reject(response);
    });
  });
};

const logon = ({ commit, state }, authenBody) => {
  return new Promise((resolve, reject) => {

    Vue.http.post(state.baseUrl + 'authenticate.do', authenBody).then(
      (response) => {
        let respdata = response.body;

        if (respdata.meta.state === 'success') {
          commit(types.SAVE_JWT_TOKEN, respdata.data);
          commit(types.SAVE_PRINCIPAL, {subject: authenBody.principal, password: authenBody.credential});
        }
        resolve(response);
      }, (response) => {
      reject(response);
    });
  });
};

export default {savePrincipal, saveJwtToken, resetJwtToken, reIssueToken, reFetchToken, logon};
