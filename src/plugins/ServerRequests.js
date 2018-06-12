export default {
    install(Vue, options) {
        Vue.server = Vue.prototype.$server = {
            user: {
                login(data) {
                    return Vue.serverEngine.request({
                        method: 'post',
                        body: data,
                        uri: Vue.serverRoutes.user.login()
                    }).then(res => Vue.auth.setToken(res.body.auth_token))
                }
            }
        }
    }
}
