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
                play(id) {
                    return 'api/games/play/' + id
                },
                show(id) {
                    return 'api/games/' + id
                },
                update(id) {
                    return 'api/games/' + id
                },
                destroy(id) {
                    return 'api/games/' + id
                }
            }
        }
    }
}
