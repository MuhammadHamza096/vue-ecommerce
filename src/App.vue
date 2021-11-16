<template>
  <div id="app">
    <!-- <Login/> -->
    <!-- <Card/> -->
<!-- 
    <b-container class="bv-example-row">
  <b-row>
    <b-col> <Card/></b-col>
    <b-col> <Card/></b-col>
    <b-col> <Card/></b-col>
    <b-col> <Card/></b-col>  
  </b-row>
</b-container> -->
   <!-- <Drawer/> -->
   <!-- <SingleProduct/> -->
   <!-- <Checkout/> -->
   <!-- <Dashboard/> -->
   <NavBar/>
   <!-- <ul>
     <li><router-link to="/dashboard">Dashboard</router-link></li>
     <li><router-link to="/signup">Signup</router-link></li>
     <li><router-link to="/">login</router-link></li>
   </ul> -->
   <router-view></router-view>
  </div>
</template>

<script>
// import Checkout from './components/Checkout.vue'

// import Login from './components/login.vue'
// import Signup from './components/Signup.vue'
// import Card from './components/Card.vue' 
// import Drawer from './components/Drawer.vue'
// import SingleProduct from './components/SingleProduct.vue'
// import Dashboard from './components/Dashboard.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  
  components: {
    // Drawer
    // SingleProduct
    // Checkout
    // Login
    // Card
    // Dashboard
    NavBar
  }
}

    </script>

<style>

</style>
