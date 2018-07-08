import { EventBus } from "../event-bus";

export default {
    install(Vue) {
        Vue.flashMessage = Vue.prototype.$flashMessage = {
            show(message, status) {
                EventBus.$emit('show-flash-message', { message, status });
            },
            subscribe(callback) {
                EventBus.$on('show-flash-message', callback);
            }
        }
    }
};
