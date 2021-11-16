import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './routes'


Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

const router=new VueRouter({
  routes
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
