// define all the components used across pages.
import Vue from 'vue';

import PageNavsbar from './mdPageNavsbar';
import LogonDialog from './mdLogonDialog';
//import PlainInput from './mdPlainInput';
// custom theme
import MdExtTheme from '../assets/styles/mdl-ext.theme';
Vue.material.styles.push(MdExtTheme);

Vue.use(PageNavsbar);
Vue.use(LogonDialog);
//Vue.use(PlainInput);
