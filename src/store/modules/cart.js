

const state={
    cart:[],
    drawer:false
    
};
const getters={
    cartProducts:state=>state.cart,
    drawerOpen:state=>state.drawer

    
}
const actions={
   
    addProduct({commit},product){
        console.log("new Product",product)
        commit('addProducts',product)
    },
    updateProduct({commit},productQuantity,productId){
        
        commit("updateQuantity",productQuantity,productId)
    },
    openDrawerAction({commit},isDrawOpen){
        commit("openDrawer",isDrawOpen)
    },
    clearCartAction({commit}){
        commit("clearCart")
    }

}
const mutations={
  
    addProducts:(state,product)=>(state.cart.push(product)), 
    openDrawer:(state,isDrawOpen)=>(state.drawer=isDrawOpen),
    updateQuantity:(state,productQuantity,productId)=>( state.cart.map((product)=>{
        if(product.id===productId){
            product.qty=productQuantity
        }
    }),
    console.log("state",state.cart)
    ),
    clearCart:(state)=>state.cart=[]
}

export default {
    state,
    getters,
    actions,
    mutations
}
