import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})
let searchURL = 'apod?api_key=wq481se2iBQxbSt95SiPe9kbF4Jqqf56sPa2jD04&date='

export default new Vuex.Store({
  state: {
    image: {},
  },
  mutations: {//mutations are calls to the API 
    setImage(state, data) {
      state.image = data
    }
  },
  actions: {
    async search({ dispatch, commit }, query) {
      try {
        let res = await api.get(searchURL + query + '&hd=true')
        console.log(res.data)
        if (res.data.media_type == "video") alert("Sorry we don't support videos.")
        commit('setImage', res.data)
      } catch (err) { console.error(err) }
    },
    getPicture({ commit, dispatch }) {
      return this.state.image
    }

  }
})
