<template>
  <div class="wrapper">
    <div class="header">
      <div class="box-content">
        <md-toolbar>
          <md-button href="#/home" class="md-icon-button">
            <md-icon>home</md-icon>
          </md-button>
          <h2 class="md-title" style="flex: 1">Hello Material Design Lite</h2>
          <md-button class="md-icon-button">
            <md-icon>info_outline</md-icon>
            <md-tooltip md-delay="400" md-direction="bottom">About Information</md-tooltip>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>track_changes</md-icon>
          </md-button>
          <md-button href="#/security" class="md-icon-button">
            <md-icon>security</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>device_hub</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>sd_storage</md-icon>
          </md-button>
          <md-button href="#/configure" class="md-icon-button">
            <md-icon>settings</md-icon>
          </md-button>
          <md-button @click.native="logon()" v-if="!authenticated" class="md-icon-button">
            <md-icon>open_in_browser</md-icon>
          </md-button>
          <md-button @click.native="logoff()" v-if="authenticated" class="md-icon-button">
            <md-icon>open_in_new</md-icon>
          </md-button>
        </md-toolbar>
      </div>
    </div>
    <div class="content">
      <div class="box-content">
        <router-view></router-view>
      </div>
    </div>
    <md-whiteframe class="footer">
      <div class="box-content">
      1dp
      </div>
    </md-whiteframe>
    <md-logon ref="logonDialog"></md-logon>
    <md-snackbar md-position="top center" ref="msgbar" md-duration="2000">
      <span>{{ message }}</span>
    </md-snackbar>
  </div>
</template>

<style lang="scss" src="./App.scss"></style>

<script>
  import Vue from 'vue';
  import { modules } from './pages/routes.js';
  import { mapGetters, mapActions} from 'vuex';
  export default {
    data() {
      return {
        pageTitle: '',
        embedSidenav: false,
        message: ''
      };
    },
    computed: {
      ...mapGetters(['authenticated']),
      logo() {
        return 'assets/images/logo-vue-material-' + Vue.material.currentTheme + '.png';
      },
      modules() {
        return modules;
      }
    },
    methods: {
      ...mapActions(['resetJwtToken']),
      logon() {
        this.$refs.logonDialog.showLogon();
      },
      logoff() {
        this.$store.dispatch('logoff').then(
          (response) => {
            let respdata = response.body;
  
            this.showMessage(respdata.meta.message);
          },
          (response) => {
            let message = '';

            if (response.ok) {
              message = '用户或密码错误，请重新登录。';
            } else {
              message = '服务器连接失败，请确认网络正常。';
            }
            this.showMessage(message);
          }
        );
      },
      reset() {
        console.log('the root is reseted');
      },
      showMessage(message) {
        this.message = message;
        this.$refs.msgbar.open();
      }
    }
  };
</script>
