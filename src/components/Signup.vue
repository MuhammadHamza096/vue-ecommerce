<template>
  <div class='login-container'>
    <b-form @submit="onSubmit" @reset="onReset" class="login-form">
        <h1> Signup form </h1>

        <b-form-group id="input-group-2" label="Name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          placeholder="Enter Name"
          
          required
        ></b-form-input>
      </b-form-group>

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

    <b-form-group id="input-group-2" label="Contact" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="contact"
          placeholder="Enter Contact"
          required
        ></b-form-input>
      </b-form-group>



      <b-form-group id="input-group-2" label="Address" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="address"
          placeholder="Enter Address"
          required
        ></b-form-input>
      </b-form-group>



        <a href="#">Back to Login</a>
      <b-button block type="submit" variant="primary" class="mb-3 mt-4">Sign Up</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  
  </div>
</template>

<script>
  export default {  
      name:'Signup',
    data() {
      return {
        
          email: '',
          password: '',
          name:'',
          contact:'',
          address:'',
          users:[]

        
      
      }
    },
    methods: {
      onSubmit(e) {
       e.preventDefault();
        const newUser ={
          email:this.email,
          name:this.name,
          password:this.password,
          contact:this.contact,
          address:this.address
        }
       if(JSON.parse(localStorage.getItem('users'))){
         this.users = JSON.parse(localStorage.getItem('users'))
       }
        this.users.push(newUser)
        localStorage.setItem('users',JSON.stringify(this.users))
        console.log('user',JSON.parse(localStorage.getItem('users')));
        this.email='';
        this.password='';
        this.contact='';
        this.$router.push('/dashBoard')
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
   margin-top: 50px;
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