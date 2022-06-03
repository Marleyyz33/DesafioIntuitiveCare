import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Snotify from 'vue-snotify';

Vue.config.productionTip = false
Vue.use(Snotify)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
