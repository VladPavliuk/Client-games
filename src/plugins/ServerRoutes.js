export default {
    install(Vue, options) {
        Vue.serverRoutes = Vue.prototype.$serverRoutes = {
            user: {
                login() {
                    return 'api/auth/login';
                }
            }
        }
    }
}
