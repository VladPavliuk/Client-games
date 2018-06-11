export default {
    install(Vue, options) {
        Vue.game = Vue.prototype.$game = {
            get() {
                return Vue.http({
                    method: 'get',
                    url: 'http://www.ping-pong.vladdev.com'
                });
            },
        };

    }
};
