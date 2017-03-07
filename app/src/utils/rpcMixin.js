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
          'Authorization': 'Bearer: ' + this.jwttoken
        };
      }
      return httpOpts;
    },
    $httpUrl(url) {

      return this.baseUrl + url;
    },
    $refreshToken() {
      return new Promise((resolve, reject) => {
            //Refresh token
            let _options = {
              headers: {
                'Authorization': 'Bearer: ' + this.jwttoken
              }
            };

            Vue.http({url: this.$httpUrl('reissue.do'), options: _options}).then( (response) => {
                //Store refreshed token
                localStorage.setItem('id_token', response.data.token);
                //Resubmit original request and resolve the response (probably shouldn't be the responsibility of the Auth service...)
                Vue.http(request).then(function (newResponse) {
                    resolve(newResponse);
                });
            }, function (newResponse) {
                reject(newResponse);
            });
        });
    }
  }
};
//https://laracasts.com/discuss/channels/vue/jwt-auth-with-vue-resource-interceptor
//define the VueResource intercepters
Vue.http.interceptors.push(function (request, next) {
    // 
    if(this.authenticated){
      //Add JWT to all requests
      request.headers.set('Authorization', 'Bearer: ' + this.jwttoken);
    }
    request.headers.set('Accept', 'application/json');

    //Skip storing token refresh requests
    next( (response) => {
        //Check for expired token response, if expired, refresh token and resubmit original request
        let respdata = response.body;

        if(respdata.meta.code === 'TOKEN_EXPIRED'){

        }
        auth.checkExpiredToken(response, request).then(function(response) {
            return response;
        })
    });
});
