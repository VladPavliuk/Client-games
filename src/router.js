import Vue from 'vue'
import Router from 'vue-router'
import AuthService from "./plugins/Auth";

import UserProfile from './components/UserProfile';
import UserLogin from './components/UserLogin';


Vue.use(AuthService);
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'user-login',
            component: UserLogin,
            meta: {requiresGuest: true}
        },
        {
            path: '/home',
            name: 'home',
            component: UserProfile,
            meta: {requiresAuth: true}
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!Vue.auth.isAuthenticated()) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (Vue.auth.isAuthenticated()) {
            next({
                path: '/home'
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;
