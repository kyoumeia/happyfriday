import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/index'

import Toast from './components/Toast/index'
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
