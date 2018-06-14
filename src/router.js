import Vue from 'vue'
import Router from 'vue-router'
import AuthService from "./plugins/Auth";

import AuthLayout from '@/components/auth/Layout'
import UserProfile from '@/components/auth/profile/Profile';
import GamesList from '@/components/auth/GamesList';

import NonAuthLayout from '@/components/non-auth/Layout'
import UserLogin from '@/components/non-auth/login/Login';
import UserRegistration from '@/components/non-auth/registration/Registration';


Vue.use(AuthService);
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            component: AuthLayout,
            children: [
                {
                    path: 'profile',
                    name: 'user-profile',
                    component: UserProfile,
                    meta: {requiresAuth: true}
                },
                {
                    path: 'games',
                    name: 'games-list',
                    component: GamesList,
                    meta: {requiresAuth: true}
                }
            ]
        },
        {
            path: '/',
            component: NonAuthLayout,
            children: [
                {
                    path: 'registration',
                    name: 'user-registration',
                    component: UserRegistration,
                    meta: {requiresGuest: true}
                },
                {
                    path: 'login',
                    name: 'user-login',
                    component: UserLogin,
                    meta: {requiresGuest: true}
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!Vue.auth.isAuthenticated()) {
            next({
                name: 'user-login'
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (Vue.auth.isAuthenticated()) {
            next({
                name: 'user-profile'
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;
