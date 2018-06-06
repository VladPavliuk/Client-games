export default {
    install(Vue, options) {
        Vue.serverRoutes = Vue.prototype.$serverRoutes = {
            transportationOptions: {
                index() {
                    return 'api/transportation-options'
                }
            },
            paymentsOptions: {
                index() {
                    return 'api/payments-formats'
                }
            },
            categories: {
                index() {
                    return 'api/categories'
                },
                show(id) {
                    return 'api/categories/' + id
                }
            },
            categoryTags: {
                index() {
                    return 'api/category-tags'
                }
            },
            products: {
                indexInCategory(categoryId) {
                    return 'api/products/in-category/' + categoryId
                },
                getImages(id) {
                    return 'api/get-products-images/' + id
                }
            },
            discounts: {
                index() {
                    return 'api/discounts'
                },
                getActive(totalPrice) {
                    return 'api/get-active-discounts/' + totalPrice
                }
            },
            orders: {
                store() {
                    return 'api/orders'
                }
            },
            users: {
                login() {
                    return 'user/login'
                },
                logout() {
                    return 'user/logout'
                }
            }
        }
    }
}
