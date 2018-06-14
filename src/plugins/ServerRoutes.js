export default {
    install(Vue, options) {
        Vue.serverRoutes = Vue.prototype.$serverRoutes = {
            user: {
                registration() {
                    return 'api/account';
                },
                login() {
                    return 'api/auth/login';
                },
                logout() {
                    return 'api/auth/logout';
                }
            }
        }
    }
}
