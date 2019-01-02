import Vue from 'vue'
import Router from 'vue-router'
import PostComponent from './components/PostComponent.vue'
import About from './components/About.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
        path:'/',
        name: 'PostComponent',
        component: PostComponent
        },
        {
        path:'/a',
        name: 'about',
        component: About    
        }
    ]
})
