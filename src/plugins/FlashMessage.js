import { EventBus } from "../event-bus";

export default {
    install(Vue, options) {
        Vue.flashMessage = Vue.prototype.$flashMessage = {
            show(message, status) {
                EventBus.$emit('on-flash-message', { message, status });
            }
        }
    }
};
