<template>
<div class="contact">
  <form
  action="https://formspree.io/f/xoqzwlwp"
   method="POST"
  >
  <h2>Contact Us</h2>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email" >Email</label>
      <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="message" >Message</label>
      <input type="text" class="form-control" id="message" name="message" required>
    </div>
    <button type="submit" class="btn btn-dark">Submit</button>
  </form>
</div>
</template>


<style scoped>

form{
  margin-left:23rem;
  padding:10rem;
  margin-right: 12rem;
}

h2{
  color:#630075
}

.form-group{
  height: 15vh;
}
label input{
  width:40px
}
.btn{
  margin-top:5rem;
}
@media (max-width: 768px) {
.row {
  flex-direction: column;
}
.contact{
  height: 50rem;
  padding:10rem;
}
}
  
</style>