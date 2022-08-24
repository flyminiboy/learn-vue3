
import {
    createRouter, 
    createWebHashHistory, 
} from 'vue-router'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Proxy from '../pages/proxy.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/proxy',
        name:'Proxy',
        component:Proxy
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router


  