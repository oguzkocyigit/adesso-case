import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/app.scss'
import '@/plugins/element'
import router from './router'
Vue.config.productionTip = false
import store from '@/store/index'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
