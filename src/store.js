import { createStore } from 'vuex';

const products = [{
  id: 1,
  img: "https://dummyimage.com/500x500/000/fff.png&text=GRE",
  title: "Winter Collection",
  description: "lorem ipsum sumlo rewo eiolantes guterian",
  price: 23,
  quantity: 1,
  color: "Blue",
  size: "Extra Small"
}, {
  id: 2,
  img: "https://dummyimage.com/500x500/000/fff.png&text=GRE1",
  title: "Men Shoes",
  description: "lorem ipsum sumlo rewo eiolantes guterian",
  price: 43,
  quantity: 2,
  color: "White",
  size: "42"
}, {
  id: 3,
  img: "https://dummyimage.com/500x500/000/fff.png&text=GRE2",
  title: "Summer Collection",
  description: "lorem ipsum sumlo rewo eiolantes guterian",
  price: 20,
  quantity: 3,
  color: "Red",
  size: "XL"
}];

export default createStore({
  state: {
    products: products,
    shippingMode: "free",
    status: 'idle',
    error: null,
  },
  mutations: {
    UPDATE_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    updateProducts({ commit }, products) {
      commit('UPDATE_PRODUCTS', products);
    }
  },
});