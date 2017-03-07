import { mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters(['jwttoken', 'subject', 'principal', 'parseToken', 'baseUrl', 'authenticated'])
  },
  methods: {
    ...mapActions(['saveJwtToken']),
    $post(apiname, body) {
      let options = this.$httpOptions();

      return this.$http.post(this.$httpUrl(apiname), body, options);
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
