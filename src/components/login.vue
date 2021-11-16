<template>
  <div class='login-container'>
    
    <b-form @submit="onSubmit" @reset="onReset" class="login-form">
        <h1>Login form </h1>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          placeholder="Enter Password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>


        <router-link to="/signup">New User? Sign Up here</router-link>
      <b-button block type="submit" variant="primary" class="mb-3 mt-4">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
  export default {
      name:'Login',
      computed:mapGetters(['userDetails']),
    data() {
      return {
       email:'',
       password:'',
       isValidUser:false,
       errorMessage:''
      }
    },
    methods: {
      onSubmit(e) {
       e.preventDefault();
         const users = JSON.parse(localStorage.getItem('users'))
         users.map(({email,password})=>{
           if(email===this.email && password === this.password){
             this.isValidUser=true;
           }
         })
         if(this.isValidUser){
           this.$router.push('/dashBoard')
         }
         else{
           this.isErrorMsg= true
           this.erroMessage="incorrect user email or password"
         }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
   margin-top: 200px;
}
.login-form{
    box-shadow: 0px 0px 10px lightgray;
    width: 30%;
    padding: 20px 50px;
    
}
.login-form h1{
    text-align: center;
}
</style>