// define all the components used across pages.
import Vue from 'vue';

import PageNavsbar from './mdPageNavsbar';
import SigninDialog from './mdSigninDialog';
// custom theme
import MdExtTheme from '../assets/styles/mdl-ext.theme';
Vue.material.styles.push(MdExtTheme);

Vue.use(PageNavsbar);
Vue.use(SigninDialog);
