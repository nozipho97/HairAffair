<template>
  <h2>Sign in</h2>
  <div class="container ">
        <form>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" required v-model="email">
        
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required v-model="password">

          <input class="login" type="submit" value="Login">

          
        </form>
      </div>

    


</template>
<script>
// function login(email, password) {
//   if (email === 'email' && password === 'password') {
//     return ('User logged in');
//   } else {
//     return ('Invalid username or password');
//   }
 
  
// }
// login(email, password);

export default {
    
}
</script>
<style>


form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
  height:20rem;
}



    
</style>