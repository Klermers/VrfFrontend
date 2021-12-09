import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios';

const API_URL = 'http://localhost:1212/';

const state = {
    token:"",
    events:[],
    event:{},
    user:{},
    categories:[],
    worlds:[]
}

const actions = {
    Login ({commit}, user) {
        axios.post('http://localhost:1212/user/login',{
            "username": user.username,
            "password": user.password
        })
        .then(response => {
            commit('SET_TOKEN',response.data)
            console.log(state.token)
        })
        .catch(error => {
            console.error(error);
        })
    },
    GetUser({commit}){
        axios.get(API_URL+ 'user/getuser',{
            headers: {
                'Authorization':state.token
            }
        })
        .then(response => {
            commit('SET_USER',response.data)
            console.log(state.user)
        })
        .catch(error => {
            console.error(error);
        })
    },
    GetEvents({commit}){
          axios.get(API_URL+ 'event/getevents')
        .then(response =>{
            commit('SET_EVENTS', response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.error(error);
        })
    },
    GetEvent({commit},id){
        axios.get(API_URL+ 'event/getevent/' + id)
        .then(response => {
            commit('SET_EVENT',response.data)
        })
        .catch(error => {
            console.error(error);
        })
    },
    GetWorlds({commit}){
        axios.get(API_URL+'world/worlds')
        .then(response =>{
            commit('SET_WORLDS',response.data)
        })
        .catch(error => {
            console.error(error);
        })
    },
    GetCategories({commit}){
        axios.get(API_URL+'category/categories')
        .then(response =>{
            commit('SET_CATEGORIES',response.data)
        })
        .catch(error => {
            console.error(error);
        })
    }
}

const getters = {
    token:(state) => state.token,
    allevents:(state) => state.events,
    event:(state) => state.event,
    user:(state) => state.user,
    allcategories:(state) => state.categories,
    allworlds:(state) => state.worlds
}

const mutations = {
    SET_EVENTS(state, events){
        state.events = events
    },
    SET_TOKEN(state, token){
        state.token = token
    },
    SET_EVENT(state, event){
        state.event = event
    },
    SET_USER(state, user){
        state.user = user
    },
    SET_CATEGORIES(state,categories){
        state.categories = categories
    },
    SET_WORLDS(state,worlds){
        state.worlds = worlds
    }
    
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})