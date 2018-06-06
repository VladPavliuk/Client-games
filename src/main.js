import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'

Vue.config.productionTip = false

//> Import custom services.
import FlashMessageService from './plugins/FlashMessage'
import CookieService from './plugins/Cookie'
import StorageService from './plugins/Storage'
import AuthService from './plugins/Auth'
import ServerEngine from './plugins/ServerEngine'
import ServerRoutes from './plugins/ServerRoutes'
import ServerRequests from './plugins/ServerRequests'
//<

Vue.use(vueResource);

//> Use custom service.
Vue.use(FlashMessageService);
Vue.use(CookieService);
Vue.use(AuthService);
Vue.use(StorageService, store);
Vue.use(ServerEngine);
Vue.use(ServerRoutes);
Vue.use(ServerRequests);
//<

Vue.http.options.root = 'https://localhost:44390';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
