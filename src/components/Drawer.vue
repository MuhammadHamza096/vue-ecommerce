<template>
<div>
  <div>
    
    <b-sidebar id="sidebar-right" class="sideBar" right  width="420px">
        <!--  -->
        <div class="drawer">
            <div class="drawer-cards" v-for="element in products" :key="element.id">
            <b-card no-body class="overflow-hidden drawer-card" >
                <b-row no-gutters>
                <b-col md="4">
                    <b-card-img :src="element.images[0]" alt="Image" class="rounded-0 drawer-card-img"></b-card-img>
                </b-col>
                <b-col md="8">
                    
                    <b-card-text class="card-content">
                        <h5>{{element.title}}</h5>
                        <p>Rs {{element.price}}</p>
                        <div class="product-total">
                            <div class="product-quantity">
                                <button variant="primary" class="quantity-btn" v-on:click="addQuantity(element)">+</button>
                                    <span>{{element.qty}}</span>
                                <button variant="primary" class="quantity-btn" v-on:click="subtractQuantity(element)">-</button>
                                <span>X</span>
                            </div>
                            <span>Rs. {{element.price}}</span>
                            <div class="total-price">Rs. {{element.qty*element.price}}</div>
                        </div>
                    </b-card-text>

                    
                </b-col>
                </b-row>
            </b-card>
            </div>
            <div class="checkout-btn">
                <b-button block variant="primary" v-on:click="checkout">Proceed to Checkout</b-button>
            </div>
        </div>
        <!--  -->

    </b-sidebar>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

  export default {  
      name:'Drawer',
   computed:{...mapGetters({cartProducts:"cartProducts"})},
   watch:{
      products:function(){
          
          this.products=this.cartProducts
      }
  
   },
data(){
return {products:[]}
},


created(){
this.products={...this.cartProducts}
},


       methods: {
         ...mapActions(["updateProduct","clearCartAction"]),
            addQuantity(product){
            console.log("new",this.products)
            product.qty=product.qty+1
            
            this.updateProduct(product.qty,product.id)
           this.products={...this.cartProducts}
        },
            subtractQuantity(product){
              product.qty=product.qty-1
              
            this.updateProduct(product.qty,product.id)
              this.products={...this.cartProducts}

        },
        checkout(){
            alert("order cnfrmed")
            this.clearCartAction()
            this.products={...this.cartProducts}
        }

    }
  }
</script>
<style scoped>
.card-content{
    padding-left: 10px;
}

.drawer-cards{
   overflow-y: scroll;
    max-height: 80vh;

}

.drawer{
    padding: 10px;
}
.drawer-card{
    width: 100%;
    height: 100px;
    padding: 8px 8px;
}
.drawer-card-img{
    width:90px;
    height:80px;
}



.quantity-btn{
    width: 25px;
    height: 22px ;
    border-radius: 6px;
    padding: -10px;
    background:#007bff;
    color: white;
    outline: none;
    border: none;
    margin: 0 3px 0 3px;
    font-size: 14px;
}
p{
    padding: 0;
    margin: 0;
}
.checkout-btn{
    position: absolute;
    bottom: 10px;
    width: 90%;
}
.product-total{
    display: flex;
    justify-content: space-between;
}



</style>