export default {
    install(Vue, options) {
        Vue.server = Vue.prototype.$server = {
            transportationOptions: {
                index() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.transportationOptions.index(),
                        store: 'transportationOptions'
                    });
                }
            },
            paymentsOptions: {
                index() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.paymentsOptions.index(),
                        store: 'paymentsOptions'
                    });
                }
            },
            categories: {
                index() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.categories.index(),
                        store: 'categories'
                    });
                },
                show(id) {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.categories.show(id),
                        store: 'category'
                    });
                }
            },
            categoryTags: {
                index() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.categoryTags.index(),
                        store: 'categoryTags'
                    });
                }
            },
            products: {
                indexInCategory(categoryId) {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.products.indexInCategory(categoryId),
                        auth: true,
                        store: 'products'
                    });
                },
                getImages(id) {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.products.getImages(id),
                        auth: true,
                        store: 'productImages'
                    });
                }
            },
            discounts: {
                index() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.discounts.index(),
                        store: 'discounts'
                    });
                },
                getActive(totalPrice) {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.discounts.getActive(totalPrice),
                        store: 'activeDiscounts'
                    });
                }
            },
            orders: {
                store(data) {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.orders.store(),
                        method: 'post',
                        body: data
                    });
                }
            },
            users: {
                login(data) {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.users.login(),
                        method: 'post',
                        body: data
                    })
                },
                logout() {
                    return Vue.serverEngine.request({
                        uri: Vue.serverRoutes.users.logout(),
                        method: 'delete',
                        message: 'Ви вийшли з свого профілю',
                        auth: true
                    });
                }
            }
        }
    }
}
