import Vuex from 'vuex';
import Vue from 'vue';
import login from './modules/login'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        login,
        products,
        cart
    }
})