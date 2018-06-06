export default {
    install(Vue, options) {
        Vue.server = Vue.prototype.$server = {
            test: {
                test() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.test.test()
                    });
                }
            }
        }
    }
}
