import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router';
import VueFormulate from '@braid/vue-formulate'
import './css/formulate.css'
import store from './store'
Vue.use(VueFormulate)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App),
}).$mount('#app')