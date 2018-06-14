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
            },
            games: {
                store() {
                    return 'api/games'
                },
                index() {
                    return 'api/games'
                },
                show() {
                    return 'api/games'
                },
                update() {
                    return 'api/games'
                },
                destroy() {
                    return 'api/games'
                }
            }
        }
    }
}
