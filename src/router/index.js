import {createRouter, createWebHistory } from 'vue-router'
import list from '@/components/List'
import create from '@/components/Create'
import update from '@/components/Update'

const routes = [
    {
        path: '/',
        name: 'list',
        component: list
    },
    {
        path: '/create',
        name: 'create',
        component: create
    },
    {
        path: '/update/:id',
        name: 'update',
        component: update
    }
]

const router = createRouter({
    history: createWebHistory (),
    routes,
})

export default router