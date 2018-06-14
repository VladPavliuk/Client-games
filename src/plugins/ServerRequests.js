export default {
    install(Vue, options) {
        Vue.server = Vue.prototype.$server = {
            user: {
                registration(data) {
                    return Vue.serverEngine.request({
                        method: 'post',
                        body: data,
                        uri: Vue.serverRoutes.user.registration()
                    });
                },
                login(data) {
                    return Vue.serverEngine.request({
                        method: 'post',
                        body: data,
                        uri: Vue.serverRoutes.user.login()
                    }).then(res => Vue.auth.setToken(res.body.auth_token))
                },
                logout() {
                    return Vue.serverEngine.request({
                        method: 'post',
                        auth: true,
                        uri: Vue.serverRoutes.user.logout()
                    }).then(_ => Vue.auth.destroyToken())
                },
            }
        }
    }
}
