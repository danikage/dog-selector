import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import { messages } from './lang/translations'
import './styles/variables.styl'

Vue.config.productionTip = false

Vue.use(VueI18n)

// I18n
const i18n = new VueI18n({
  locale: 'es',
  messages,
})

// Autoload components
const components = require.context('.', true, /\.vue$/i);
components.keys().forEach((key) => {
    const component = components(key).default;
    const name = component.name || `${key.split('/').pop().split('.')[0]}`;
    Vue.component(name, component);
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
