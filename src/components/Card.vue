<template>
<div>
  <!-- <div v-for="product in products" :key="product.id">
    {{product.title}}
  </div> -->
  <b-card
    v-bind:title="title"
    v-bind:img-src="img"
    
    img-alt="Red Shirt"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 card"
  >
    <b-card-text>
      Rs. {{price}}
    </b-card-text>

    <b-button block href="#" variant="primary" v-on:click="addToCart()">Add to Cart</b-button>
     
  </b-card>
</div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from 'vuex';
 
  export default {  

      name:'Card',
       computed:mapGetters(["cartProducts"]),
      props:{
        title:String,
        price:Number,
        img:String,
        product:Object
    },
      // computed:mapGetters(['products']),

   
    methods: {
      ...mapActions(["addProduct"]),
      addToCart(){ 
        // this.product.
        let isProductExist=false
        
        this.cartProducts.map((product)=>{
          if(this.product.id===product.id){
            isProductExist=true
          }
        })
        if(!isProductExist){
          this.product.qty=1
           this.addProduct(this.product)
        }
       
      }
      
    },
 
  }
</script>
<style scoped>
.card{
    height: 440px ;
    width: 500px;
    padding: 20px;
}
</style>