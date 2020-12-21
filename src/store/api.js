import axios from 'axios'
import '@/store/interceptors'

export default {
  getBreeds() {
    return axios.get(`https://dog.ceo/api/breeds/list/all`)
  },
  getImages(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
  },
}