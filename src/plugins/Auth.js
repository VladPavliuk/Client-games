export default {
    install(Vue, options) {
        Vue.auth = Vue.prototype.$auth = {

            decodeToken() {
                return this.getToken() ? Vue.jwtDec.decode(this.getToken().slice(7)) : null;
            },

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
