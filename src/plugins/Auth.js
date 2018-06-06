export default {
    install(Vue, options) {
        Vue.auth = Vue.prototype.$auth = {

            setToken(token) {
                Vue.shoppingCart.clear();
                localStorage.setItem('token', 'Bearer ' + token)
            },

            getToken() {
                return localStorage.getItem('token')
            },

            destroyToken() {
                Vue.shoppingCart.clear();
                localStorage.removeItem('token');
            },

            isAuthenticated() {
                return !!this.getToken();
            }
        };

    }
};
