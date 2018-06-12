import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import UserLogin from './components/UserLogin'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'user-login',
            component: UserLogin
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
