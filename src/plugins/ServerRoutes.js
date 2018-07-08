export default {
    install(Vue) {
        Vue.serverRoutes = Vue.prototype.$serverRoutes = {
            user: {
                registration: () => 'api/account',
                uploadAvatar: () => 'api/account/upload-image',
                login: () => 'api/auth/login',
                logout: () => 'api/auth/logout'
            },
            games: {
                store: () => 'api/games',
                index: () => 'api/games',
                play: (id) => `api/games/play/${id}`,
                show: (id) => `api/games/${id}`,
                update: (id) => `api/games/${id}`,
                destroy: (id) => `api/games/${id}`
            }
        }
    }
}
