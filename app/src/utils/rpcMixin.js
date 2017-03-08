import { mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters(['jwttoken', 'subject', 'audience', 'principal', 'parseToken', 'tokenState', 'baseUrl', 'authenticated'])
  },
  methods: {
    ...mapActions(['saveJwtToken', 'savePrincipal']),
    $post(apiname, body) {
      let _options = this.$httpOptions();

      if (this.authenticated) {
        let _tokenState = this.tokenState;

        if ( _tokenState === 'TO_BE_EXPIRE' ) {

          return this.$reissueTokenCall(apiname, body);
        } else if ( _tokenState === 'EXPIRED' ) {

          return this.$relogonCall(apiname, body);
        }

        return this.$http.post(this.$httpUrl(apiname), body, _options);

      }

      this.$root.showMessage('Please logon firstly');

    },
    $httpOptions(options) {
      let httpOpts = options ? options : {};

      if (this.jwttoken) {
        httpOpts['headers'] = {
          Authorization: 'Bearer: ' + this.jwttoken,
          Accept: 'application/json'
        };
      }
      return httpOpts;
    },
    $httpUrl(url) {

      return this.baseUrl + url;
    },
    $reissueTokenCall(apiname, body) {
      // use promise to chain up the process.
      return new Promise((resolve, reject) => {
        // prepare the options to reissue the token;
        let _options = this.$httpOptions();

        this.$http.get(this.$httpUrl('reissue.do'), _options).then(
          (response) => {
            let respdata = response.body;

            if (respdata.meta.state === 'success') {
              this.saveJwtToken({subject: this.account, jwttoken: respdata.data});
              _options = this.$httpOptions();
              this.$http.post(this.$httpUrl(apiname), body, _options).then(
                (response) => {
                  resolve(response);
                },
                (response) => {
                  reject(response);
                });
            } else {
              this.$root.showMessage(respdata.meta.message);
            }
          },
          (response) => {
            if (response.ok) {
              this.$root.showMessage('fail to reissue token');
            } else {
              this.$root.showMessage('fail to connect');
            }
          }
        );
      });
    },
    $relogonCall(apiname, body) {
      return new Promise((resolve, reject) => {
        let authenBody = {
          principal: this.principal.subject,
          credential: this.principal.credential,
          audience: this.audience
        };

        this.$http.post(this.$httpUrl('authenticate.do'), authenBody).then(
          (response) => {
            let respdata = response.body;

            if (respdata.meta.state === 'success') {
              this.saveJwtToken({subject: this.account, jwttoken: respdata.data});
              this.savePrincipal({subject: this.account, password: this.password});
              let _options = this.$httpOptions();

              this.$http.post(this.$httpUrl(apiname), body, _options).then(
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
          if (response.ok) {
            this.$root.showMessage('fail to reissue token');
          } else {
            this.$root.showMessage('fail to connect');
          }
        });
      });
    },
    $logon(authenBody) {
      return new Promise((resolve, reject) => {
        this.$http.post(this.$httpUrl('authenticate.do'), authenBody).then(
          (response) => {
            let respdata = response.body;

            if (respdata.meta.state === 'success') {
              this.saveJwtToken({subject: this.account, jwttoken: respdata.data});
              this.savePrincipal({subject: this.account, password: this.password});
            }
            resolve(response);
          }, (response) => {
          reject(response);
        });
      });
    }
  }
};
