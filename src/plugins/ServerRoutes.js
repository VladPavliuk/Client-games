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
                openSession: (id) => `api/games/${id}/open-session`,
                show: (id) => `api/games/${id}`,
                update: (id) => `api/games/${id}`,
                destroy: (id) => `api/games/${id}`
            }
        }
    }
}
