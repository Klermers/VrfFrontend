import Vue from 'vue';
import Router from 'vue-router'
import Homepage from './components/Homepage/Homepage'
import Event from './components/Event/Event'
import Events from './components/Events/Events'
import CreateEvent from './components/CreateEvent/CreateEvent'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/events',
            name: 'events',
            component: Events
        },
        {
            path: '/event',
            name: 'event',
            component: Event
        },
        {
            path: '/createevent/',
            name: 'createevent',
            component: CreateEvent
        }
    ]
})

export default router;