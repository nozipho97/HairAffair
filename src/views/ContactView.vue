<template>
<div class="container">
    <div class="box1">
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
        
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        
            <input type="submit" value="Submit">
        </form>
    </div>
    <div class="box">
        <img src="https://i.postimg.cc/C51jjsyV/project-fococlipping-standard.png" alt="picture">
    </div>
</div>      
    
</template>


<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10%;
  }
  
  label {
    font-weight: bold;
  }
  
  input, textarea {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    resize: none;
  }
  
  textarea {
    height: 100px;
  }
  
  input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
  
  .box {
    display: inline-block;
    width: 48%;
    height: 200px;
    margin: 0 1%;
    background-color: transparent;
   
  }
  .box1 {
    display: inline-block;
    width: 48%;
    height: 200px;
    margin-bottom: 60%;
    background-color: transparent;
   
  }
  
  
</style>