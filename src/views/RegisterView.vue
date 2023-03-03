<template>
      <div class="box">
        <form @submit.prevent="registration">
          <h2>Register</h2>
          <label for="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" v-model="firstName" required>
      
          <label for="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" v-model="lastName" required>

          <label for="gender">Gender:</label>
          <input type="text" id="gender" name="gender" v-model="gender" required>

          <label for="userProfile">User Role</label>
          <input type="text" id="profile" name="profile" v-model="userRole" required>
      
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="emailAdd" required>
      
          <label for="date">JoinDate:</label>
          <input type="date" id="date" name="date" v-model="joinDate" required>
      
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" v-model="userPass" required>
      
          <label for="password">Confirm Password:</label>
          <input type="confpassword" id="confpassword" name="confpassword" v-model="confirmedPass"  required>
      
          <button type="submit">Register</button>
        </form>
      </div>
      
      
</template>
<script>
export default {
  data() { 
    return {
      firstName: '',
      lastName: '',
      emailAdd: '',
      userPass: '',
      gender: '',
      userRole: '',
      joinDate:'',
      confirmedPass: ''
    }
  },
  computed: {
    message() { 
      return this.$store.state.message
    }
  },
  methods: { 
    registration() { 
      this.$store.dispatch('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        userPass: this.userPass,
        gender: this.gender,
        joinDate: this.joinDate,
        userRole: this.userRole
      })
    }
  }

}
</script>
<style scoped>
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
    
  }
  
  
</style>