import {createRouter, createWebHistory } from 'vue-router'
import helloWorld from '@/components/HelloWorld'
import list from '@/components/List'
import create from '@/components/Create'

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
    },
    {
        path: '/create',
        name: 'create',
        component: create
    }
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router