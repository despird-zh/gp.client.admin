<template>
  <div class="wrapper">
    <div class="header">
      <div class="box-content">
        <md-toolbar>
          <md-button class="md-icon-button">
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
          <md-button class="md-icon-button">
            <md-icon>security</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>device_hub</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>sd_storage</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>settings</md-icon>
          </md-button>
          <md-avatar>
            <img src="assets/images/avatar.png" alt="Avatar">
          </md-avatar>
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
        this.$refs['logon-box'].showLogon();
      },
      toggleSidenav() {
        let mediaWidth = window.innerWidth;

        // media width > 1281, apply the [hide-sidenav] to hide sidenav
        if (mediaWidth > 1281) {
          this.embedSidenav = !this.embedSidenav;
          return;
        }

        this.embedSidenav = false;
        this.$refs['main-sidebar'].toggle();
      },
      closeSidenav() {
        this.$refs['main-sidebar'].close();
      }
    }
  };
</script>
