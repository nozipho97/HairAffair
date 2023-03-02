import { createStore } from 'vuex'
import axios from 'axios'
const homeAffairsURL = 'https://hairaffair.onrender.com/';

export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product: null,
    showSpinner: null,
    messege: null,
  },
  getters: {
    getProducts: (state) => state.products,
    getUsers:(state) => state.users
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, values) {
      state.user = values;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, values) {
      state.product = values;
    }
    
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${homeAffairsURL}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit(`setUsers`,results)
      } else {
        context.commit('setMessege',err)
      }
    },
    fetchProducts: async (context) => {
      const response = await axios.get(`${homeAffairsURL}products`);
      const { results } = response.data;
      context.commit("setProducts", results);
    },
  },
  modules: {
    
  }
})
 