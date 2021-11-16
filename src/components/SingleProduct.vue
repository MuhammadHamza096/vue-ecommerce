<template>
    <div>
        <b-container fluid class="product-container">
            <b-row>
                <b-col>
                    <div class="img-container">
                        <img src="https://images.dxl.com/is/image/CasualMale/210915_DXL_PLP_Shirts%20Update_3512_SHIRT-3">
                    </div>
                </b-col>
                <b-col> 
                    <div class="product-content">
                        <div class="product-title">
                            <h1>Product1</h1>
                        </div>
                        <div class="product-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi accusamus excepturi explicabo, corporis pariatur alias magnam laboriosam sint aspernatur distinctio officia modi dolor natus maiores quae, doloremque quis nam magni ut reiciendis rem! Facere alias modi aperiam excepturi quia neque at rerum magnam porro, debitis asperiores explicabo eligendi. Quia.</p>
                        </div>
                        <div class="product-btn">
                             <b-button variant="primary">Add to Cart </b-button>
                        </div>
                    </div>
                </b-col>
               
                  
            </b-row>
        </b-container>
    </div>
</template>

<script>
  export default {  
      name:'SingleProduct',
 
    methods: {
    }
  }
</script>
<style scoped>
.product-container{
    padding: 100px 30px;

}
.img-container{
    width: 80%;
    height: 500px;
}
.img-container img{
    width: 100%;
    height: 100%;
}
.product-content{
    padding-top: 50px;
}
</style>