import Vue from 'vue';
import VueRouter from 'vue-router';

import VueResource from 'vue-resource';
import {presetTheme, switchTheme} from './config.js';
import store from './store';

import 'vue-material/dist/vue-material.css';
import 'assets/styles/mdl-ext.scss';

Vue.use(VueRouter);
Vue.use(VueResource);
// initialize the common components
import './components/index.js';
// initialize the definition of route setting.
import { routes } from './pages/routes.js';
// initialize the application main entrance
import App from './App';
// initialize the routing information
const router = new VueRouter({
  routes
});
// preset theme of material library and customized components theme, i.e SearchBox etc.

presetTheme();
// load the main page component(root)
let GPressMain = Vue.component('gpress-main', App);

// create a Vue instance to bootstrap the page
GPressMain = new GPressMain({
  el: '#gpress-main',
  store,
  router
});

// set default theme of whole page
switchTheme('default');
// register the routing event
router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    GPressMain.closeSidenav();

    next();
  });
});
