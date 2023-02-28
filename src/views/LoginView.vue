<template>
  <div class="box1">
    <h1>Login</h1>
    <form>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" required>
    
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    
      <input type="submit" value="Login">
    </form>
  </div>  

</template>
<script>
export default {
    
}
</script>
<style scoped>
.box1 {
  width: 400px;
  height: auto;
  margin: 0 auto;
  padding: 30px;
  background-color:black;
  box-shadow: 30px 0px 10px rgb(#ffff00);
  border-radius: 5px;
  margin-bottom: 5%;
  margin-top:5% ;
  
}

h1{
  color: yellow;
  text-align: center;
}






form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-weight: bold;
  text-align: center;
  color: #ffff00;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  color:#ffff00;
  text-align: center;
}

input[type="submit"] {
  background-color:#ffff00;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

    
</style>