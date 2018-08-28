import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Logo from '@/components/Logo.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {
    Logo
  },
  render: h => h(App)
}).$mount('#app')
