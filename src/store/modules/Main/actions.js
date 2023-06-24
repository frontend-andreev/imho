import axios from "axios"
import Vue from 'vue';

export default {
    GET_AUTHORS_FROM_API({ commit }) {
        return axios(Vue.prototype.$hostname + '/authors', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_AUTHORS', response.data)
            })
    },
    GET_PUBLICATIONS_FROM_API({ commit }) {
        return axios(Vue.prototype.$hostname + '/publications', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_PUBLICATIONS', response.data)
            })
    },
    GET_THEMES_FROM_API({ commit }) {
        return axios(Vue.prototype.$hostname + '/themes', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_THEMES', response.data)
            })
    },
    GET_ARCHIVE_FROM_API({ commit }) {
        return axios(Vue.prototype.$hostname + '/archivePublications', {
                method: 'GET'
            })
            .then(response => {
                commit('SET_ARCHIVE', response.data)
            })
    },
    getUserById({ state }, data) {
        return state.listOfAuthors.find(x => x.id == data)
    },
}