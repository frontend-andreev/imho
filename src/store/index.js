// import { createStore } from 'vuex'
import Vue from 'vue';
import Vuex from 'vuex';
import Users from './modules/users/'
import Main from './modules/Main';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        Users,
        Main
    }
})
export default store