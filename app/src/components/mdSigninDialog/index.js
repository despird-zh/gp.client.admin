import MdSigninDialog from './mdSigninDialog.vue';

export default function install(Vue) {
  Vue.component('md-signin', Vue.extend(MdSigninDialog));
}
