import MdLogonDialog from './mdLogonDialog.vue';

export default function install(Vue) {
  Vue.component('md-logon', Vue.extend(MdLogonDialog));
}
