<template>
  <div class="gp-logon">
    <md-dialog ref="logonDialog">
      <md-dialog-title>Welcome to Groupress</md-dialog-title>

      <md-dialog-content>
        <form>
            <md-input-container>
                <label>Login Account</label>
                <md-input v-model="account" placeholder="enter the account"></md-input>
            </md-input-container>
            <md-input-container>
                <label>Login Password</label>
                <md-input v-model="password" type="password" placeholder="enter the password"></md-input>
            </md-input-container>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="gp-m-r md-raised" @click.native="closeLogon()">Cancel</md-button>
        <md-button class="md-primary md-raised" @click.native="submitLogon()">SignOn</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-snackbar md-position="top center" ref="msgbar" md-duration="4000">
      <span>{{ message }}</span>
    </md-snackbar>
  </div>
</template>

<style lang="scss" src="./mdLogonDialog.scss"></style>

<script>
  import httpOptions from '../../utils/jwtToken';
  import { mapGetters, mapActions} from 'vuex';
  export default {
    mixins: [httpOptions],
    data: () => ({
      account: 'dev1',
      password: '1',
      message: ''
    }),
    computed: {
      ...mapGetters(['jwttoken', 'subject', 'audience', 'baseUrl'])
    },
    methods: {
      ...mapActions(['saveJwtToken']),
      showLogon() {
        this.$refs.logonDialog.open();
      },
      closeLogon() {
        this.$refs.logonDialog.close();
      },
      submitLogon() {
        let options = this.$httpOptions();

        let body = {
          principal: this.account,
          credential: this.password,
          audience: this.audience
        };

        this.$http.post(this.$httpUrl('authenticate.do'), body, options).then(function(response) {
          let data = response.body;

          if (data.meta.state === 'success') {
            this.saveJwtToken({subject: this.account, jwttoken: data.data});
            this.closeLogon();
          }
        }, function(response) {
          if (response.ok) {
            this.message = '用户或密码错误，请重新登录。';
          } else {
            this.message = '服务器连接失败，请确认网络正常。';
            this.closeLogon();
          }
          this.$refs.msgbar.open();
          console.log(response);
        });
      },
      onOpen() {
        console.log('Opened');
      },
      onClose(type) {
        console.log('Closed', type);
      }
    }
  };
</script>
