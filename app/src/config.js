import Vue from 'vue';
import VueMaterial from 'vue-material';
// register the vue-material components
Vue.use(VueMaterial);

// define the theme setting list
let initialTheme = () => {
  Vue.material.registerTheme({
    default: {
      primary: 'blue',
      accent: 'pink'
    },
    blue: {
      primary: 'blue',
      accent: 'pink'
    },
    indigo: {
      primary: 'indigo',
      accent: 'pink'
    },
    brown: {
      primary: 'brown',
      accent: 'green'
    },
    purple: {
      primary: 'purple',
      accent: 'blue'
    },
    orange: {
      primary: 'orange',
      accent: 'purple'
    },
    green: {
      primary: 'green',
      accent: 'pink'
    },
    'light-blue': {
      primary: 'light-blue',
      accent: {
        color: 'cyan',
        hue: 'A200'
      }
    },
    teal: {
      primary: 'teal',
      accent: 'orange'
    },
    'blue-grey': {
      primary: 'blue-grey',
      accent: 'blue'
    },
    cyan: {
      primary: 'cyan',
      accent: 'pink'
    },
    red: {
      primary: 'red',
      accent: 'pink'
    },
    white: {
      primary: 'white',
      accent: 'blue'
    },
    grey: {
      primary: {
        color: 'grey',
        hue: 300
      },
      accent: 'indigo'
    }
  });
};
// handle the theme switching
let handleSectionTheme = (theme) => {

  Vue.material.setCurrentTheme(theme);
};

module.exports = {
  switchTheme: handleSectionTheme,
  presetTheme: initialTheme
};
