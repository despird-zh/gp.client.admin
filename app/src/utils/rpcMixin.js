import { mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters(['jwttoken', 'subject', 'audience', 'principal', 'parseToken', 'baseUrl', 'authenticated'])
  },
  methods: {
    ...mapActions(['saveJwtToken', 'savePrincipal']),
    $post(apiname, body) {
      let options = this.$httpOptions();
      let promise = this.$checkToken();

      if (this.authenticated && !promise) {

        promise.then(() => {
          return this.$http.post(this.$httpUrl(apiname), body, options);
        });
      }

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
    $checkToken() {

      let parseToken = this.parseToken;
      let currTimestamp = Math.floor(Date.now() / 1000);

      if (currTimestamp - parseToken.exp < 5 * 60 && currTimestamp - parseToken.exp > 0) {
        // use promise to chain up the process.
        return new Promise((resolve, reject) => {
          // prepare the options to reissue the token;
          let _options = this.$httpOptions();

          this.$http.get({url: this.$httpUrl('reissue.do'), options: _options}).then(
            (response) => {
              let respdata = response.data;
              let respmeta = response.meta;

              if (respmeta.state === 'success') {
                this.saveJwtToken({subject: this.account, jwttoken: respdata.data});
                resolve();
              } else {
                this.$root.showMessage(respmeta.message);
                reject();
              }
            },
            (response) => {
              if (response.ok) {
                this.$root.showMessage('fail to reissue token');
              } else {
                this.$root.showMessage('fail to connect');
              }
              reject();
            }
          );
        });
      } else if (currTimestamp - parseToken.exp >= 5 * 60) {
        let authenBody = {
          principal: this.principal.subject,
          credential: this.principal.credential,
          audience: this.audience
        };

        return this.$logon(authenBody);
      }

        // token is valid
      return true;


    },
    $logon(authenBody) {
      return new Promise((resolve, reject) => {
        this.$post(this.$httpUrl('authenticate.do'), authenBody).then(
          (response) => {
            let respdata = response.body;

            if (respdata.meta.state === 'success') {
              this.saveJwtToken({subject: this.account, jwttoken: respdata.data});
              this.savePrincipal({subject: this.account, password: this.password});
            }
            resolve(response);
          }, (response) => {
          reject(response);
        }
        );
      });
    }
  }
};
//https://laracasts.com/discuss/channels/vue/jwt-auth-with-vue-resource-interceptor
