import { mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters(['jwttoken', 'subject', 'audience', 'baseUrl'])
  },
  methods: {
    ...mapActions(['saveJwtToken']),
    $post(apiname, body, success, fail) {
      let options = this.$httpOptions();

      this.$http.post(this.$httpUrl(apiname), body, options).then(success, fail);
    },
    $httpOptions(options) {
      let httpOpts = options ? options : {};

      if (this.jwttoken) {
        httpOpts['headers'] = {
          'Auth-Token': this.jwttoken
        };
      }
      return httpOpts;
    },
    $httpUrl(url) {

      return this.baseUrl + url;
    }
  }
};
