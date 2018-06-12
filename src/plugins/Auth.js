export default {
    install(Vue, options) {
        Vue.auth = Vue.prototype.$auth = {

            setToken(token) {
                localStorage.setItem('token', 'Bearer ' + token)
            },

            getToken() {
                return localStorage.getItem('token')
            },

            destroyToken() {
                localStorage.removeItem('token');
            },

            isAuthenticated() {
                return !!this.getToken();
            }
        };

    }
};
