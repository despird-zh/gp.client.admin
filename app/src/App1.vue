<template>
  <div class="container">
    <div class="page-header">
      <div class="content">
        <md-toolbar>
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Default</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>
      </div>
    </div>
    <div class="page-body">
      <div class="content">
        <md-page-toolbar></md-page-toolbar>
        <div>
          <span>what are you doing</span>
        </div>
      </div>
    </div>
    <md-whiteframe class="page-footer" md-tag="section">
      <div class="content">
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
    },
    mounted: function() {
      console.log(modules);
    }
  };
</script>
