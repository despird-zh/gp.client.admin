<template>
  <div class="wrapper">
    <div class="header">
      <div class="box-content">
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
    <div class="content">
      <div class="box-content">
        <md-layout :md-column=true>
          <md-layout>
            <md-page-navs>
              <md-page-nav>
                slslslsl
              </md-page-nav>
            </md-page-navs>
          </md-layout>
          <md-layout>
          </md-layout>
          <md-layout></md-layout>
        </md-layout>

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
    },
    mounted: function() {
      console.log(modules);
    }
  };
</script>
