import Vue from 'vue'
import App from './App.vue'
import InlineSvg from 'vue-inline-svg';
import router from './router'

Vue.config.productionTip = false
Vue.component('inline-svg', InlineSvg);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
