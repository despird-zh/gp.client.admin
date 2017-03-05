import MdPlainInput from './mdPlainInput.vue';
import MdPlainInputTheme from './mdPlainInput.theme';

export default function install(Vue) {
  Vue.component('md-plain-input', Vue.extend(MdPlainInput));

  Vue.material.styles.push(MdPlainInputTheme);
}
