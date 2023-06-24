import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'
import VCalendar from 'v-calendar';
import "@/assets/styles/style.css"

Vue.prototype.$hostname = 'http://195.133.201.24:3000';
Vue.use(VCalendar)
Vue.config.productionTip = false

const vm = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
export {vm}