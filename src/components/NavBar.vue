<template>

    <div class="navigation">
            <h1>Nisum</h1>
            <div>
                <b-icon icon="cart2" class="cart-icon" v-on:click="openDrawer" v-b-toggle.sidebar-right></b-icon>
            </div>
    </div>

</template>

<script>
import {mapActions} from "vuex";
export default {
  name: 'NavBar',
  methods:{
      ...mapActions(['openDrawerAction']),
        openDrawer(){
            this.openDrawerAction(true)
        }

  }
}
</script>
<style scoped>
.navigation{
    width: 100%;
    background-color: #007bff;
    color: white;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
}
.cart-icon{
    font-size: 30px!important;
    margin-right: 80px;
    margin-top:10px
}
</style>