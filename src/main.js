import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import VueJwtDecode from 'vue-jwt-decode'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // Vue material theme

Vue.config.productionTip = false;

//> Import custom services.
import FlashMessageService from './plugins/FlashMessage'
import CookieService from './plugins/Cookie'
import StorageService from './plugins/Storage'
import AuthService from './plugins/Auth'
import ServerEngine from './plugins/ServerEngine'
import ServerRoutes from './plugins/ServerRoutes'
import ServerRequests from './plugins/ServerRequests'
import GameService from './plugins/Game'
//<

Vue.use(vueResource);
Vue.use(VeeValidate);
Vue.use(VueJwtDecode);
Vue.use(VueMaterial)

//> Use custom service.
Vue.use(FlashMessageService);
Vue.use(CookieService);
Vue.use(AuthService);
Vue.use(StorageService, store);
Vue.use(ServerEngine);
Vue.use(ServerRoutes);
Vue.use(ServerRequests);
Vue.use(GameService);
//<

Vue.http.options.root = process.env.VUE_APP_LUCROR_GAMES_APP_SERVER_URL;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
