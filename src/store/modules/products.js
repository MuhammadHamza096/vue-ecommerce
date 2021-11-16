import axios from 'axios'

const state={
    product:{
    }
};
const getters={
    products:state=>state.product
}
const actions={
    async fetchProducts({commit}){
        const response= await axios.get('https://dummyjson.com/products')
        console.log(response.data.products)
        commit('setProducts',response.data.products)
    },
   
}
const mutations={
    setProducts:(state,products)=>(state.product=products),
}

export default {
    state,
    getters,
    actions,
    mutations
}
