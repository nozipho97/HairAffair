<template>
    <div class="box">
        <form>
          <h2>Register</h2>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
      
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
      
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
      
          <label for="password">Confirm Password:</label>
          <input type="password" id="password" name="password" required>
      
          <button type="submit">Register</button>
        </form>
      </div>
      
</template>
<script>
export default {

}
</script>
<style scoped>
.box {
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
  
  h2 {
    margin-top: 0;
    color: yellow;
    text-align: center;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    color: yellow;
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px yellow;
  }
  
  button[type="submit"] {
    background-color: yellow;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
  }
  
  
</style>