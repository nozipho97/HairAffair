import { createStore } from 'vuex'
// import axios from 'axios'
// const homeAffairsURL = ''

export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product: null,
    showSpinner: null,
    messege: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.user=value
    }
  },
  actions: {
    // async fetchUsers(context) {
    //   const res = await axios.get(`${homeAffairsURL}Users`);
    //   const { result, err } = await res.data;
    //   if (results) {
    //     context.commit(`setUsers`,results)
    //   } else {
    //     context.commit('setMessege',err)
    //   }
    // }
  },
  modules: {
  }
})
