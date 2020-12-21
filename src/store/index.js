import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breeds: null,
    images: null
  },
  getters: {
    breedsList: state => {
      return state.breeds
    },
    imagesList: state => {
      return state.images
    },
  },
  mutations: {
    setBreeds(state, breeds){
      state.breeds = breeds
    },
    setImages(state, images){
      state.images = images
    },
  },
  actions: {
    async getList({commit}) {
      return api.getBreeds()
      .then((res) => {
        commit('setBreeds', res.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    async getImages({commit}, breed) {
      return api.getImages(breed)
      .then((res) => {
        commit('setImages', res.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
