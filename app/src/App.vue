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
          <md-button @click.native="logon()" class="md-icon-button">
            <md-icon>open_in_browser</md-icon>
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
  </div>
</template>

<style lang="scss" src="./App.scss"></style>

<script>
  import Vue from 'vue';
  import { modules } from './pages/routes.js';

  export default {
    data() {
      return {
        pageTitle: '',
        embedSidenav: false
      };
    },
    computed: {
      logo() {
        return 'assets/images/logo-vue-material-' + Vue.material.currentTheme + '.png';
      },
      modules() {
        return modules;
      }
    },
    methods: {
      logon() {
        this.$refs.logonDialog.showLogon();
      },
      reset() {
        console.log('the root is reseted');
      }
    }
  };
</script>
