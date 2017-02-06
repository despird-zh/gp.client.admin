import MdPageNav from './mdPageNav.vue';
import MdPageNavsbar from './mdPageNavsbar.vue';
import MdPageNavsbarTheme from './mdPageNavsbar.theme';

export default function install(Vue) {
  Vue.component('md-page-nav', Vue.extend(MdPageNav));
  Vue.component('md-page-navs', Vue.extend(MdPageNavsbar));

  Vue.material.styles.push(MdPageNavsbarTheme);
}
