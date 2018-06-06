export default {
    install(Vue, options) {
        Vue.serverRoutes = Vue.prototype.$serverRoutes = {
            test: {
                test() {
                    return 'api/values';
                }
            }
        }
    }
}
