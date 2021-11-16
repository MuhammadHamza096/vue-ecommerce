<template>
  <div>
      
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="4" v-for="product in products" :key="product.id"><Card :product="product" :title="product.title" :price="product.price"  :img="product.images[0]" /></b-col>
        </b-row>
    </b-container>

    <b-container class="bv-example-row">
        <b-row>
            <b-col cols="4" v-for="product in products" :key="product.id"><Card :product="product" :title="product.title" :price="product.price"  :img="product.images[0]" /></b-col>
        </b-row>
    </b-container>
  
    <Drawer v-if="drawerOpen" />

  </div>
</template>

<script>

import Card from './Card.vue' 
import {mapActions} from "vuex";
import {mapGetters} from 'vuex';
import Drawer from './Drawer.vue'


export default {
  name: 'Dashboard',
   
  computed:mapGetters(['products',"cartProducts","drawerOpen"]),
  components: {
    Card,
    Drawer
  },
   methods: {
      ...mapActions(['fetchProducts']),  
  
    },
    updated:function(){
      console.log("hjfnkj")
    },
    created(){
        this.fetchProducts()
        console.log("he")
    },
  

}

</script>

<style>

</style>
