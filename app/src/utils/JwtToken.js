/**
 * This the partial method to prepare
 * for the http request
**/
export default {

  methods: {

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
