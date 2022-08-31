import { Vue } from 'vue'
import Router from 'vue-router'
import helloWorld from '@/components/HelloWorld'
import list from '@/components/List'

Vue.use(Router)

export default new Router({
    routes: [
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
})
