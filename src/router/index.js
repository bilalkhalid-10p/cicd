import {createRouter, createWebHistory } from 'vue-router'
import helloWorld from '@/components/HelloWorld'
import list from '@/components/List'

const routes = [
    {
        path: '/',
        name: 'home',
        component: helloWorld
    },
    {
        path: '/list',
        name: 'list',
        component: list
    }
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router