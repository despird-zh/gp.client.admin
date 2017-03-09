import { mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters(['jwttoken', 'subject', 'audience', 'baseUrl', 'tokenState', 'authenticated'])
  },
  methods: {
    ...mapActions(['saveJwtToken', 'savePrincipal', 'resetJwtToken', 'reIssueToken', 'reFetchToken', 'logon']),
    $post(apiName, requestBody, ) {

      if (this.authenticated) {
        let _tokenState = this.tokenState;

        if ( _tokenState === 'TO_BE_EXPIRE' ) {

          return this.$store.dispatch('reIssueToken', {apiName, requestBody});
        } else if ( _tokenState === 'EXPIRED' ) {

          return this.$store.dispatch('reFetchToken', {apiName, requestBody});
        }
        let _options = this.$httpOptions();

        return this.$http.post(this.$httpUrl(apiName), requestBody, _options);

      }

      this.$root.showMessage('Please logon firstly');

    },
    $httpUrl(url) {

      return this.baseUrl + url;
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
    $logon(authenBody) {

      return this.$store.dispatch('logon', authenBody);
    },
    $rejectTrap(response) {
      let message = '';

      if (response.ok) {
        message = '用户或密码错误，请重新登录。';
      } else {
        message = '服务器连接失败，请确认网络正常。';
      }
      this.$root.showMessage(message);
    }
  }
};
