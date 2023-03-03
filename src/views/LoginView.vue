<template>
  <h2>Sign Up</h2>
  <div class="box">
        <form @submit.prevent="login">
          <label for="emailAdd">Email:</label>
          <input type="text" id="email" name="email" required v-model="emailAdd">
        
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required v-model="userPass">

          <button type="submit">Sign Up</button>
        
        </form>
      </div>

    


</template>
<script>
export default {
  data() { 
    return {
      emailAdd: '',
      userPass: '',
    }
  },
  computed: {
    message() { 
      return this.$store.state.message
    }
  },
  methods: { 
    login() { 
      this.$store.dispatch('login', {
        emailAdd: this.emailAdd,
        userPass: this.userPass
      })
    }
  }

}
  

</script>
<style>
.box {
  width: 400px;
  height: auto;
  margin: 0 auto;
  padding: 30px;
  box-shadow: 30px 0px 10px rgb(#633075);
  border-radius: 5px;
  margin-bottom: 5%;
  margin-top:5% ;
  
}


label {
  display: block;
  margin-bottom: 10px;
  color: #633075;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #633075;
}

button[type="submit"] {
  background-color: #633075;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  padding-top: 1rem;
}






    
</style>