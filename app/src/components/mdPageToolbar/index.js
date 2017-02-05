import MdPageToolbar from './mdPageToolbar.vue';
import MdPageToolbarTheme from './mdPageToolbar.theme';

export default function install(Vue) {
  Vue.component('md-page-toolbar', Vue.extend(MdPageToolbar));

  Vue.material.styles.push(MdPageToolbarTheme);
}
