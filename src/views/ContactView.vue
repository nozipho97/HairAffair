<template>
  <h3>Sign Up</h3>
<div class="contact">
  <form
  action="https://formspree.io/f/xoqzwlwp"
   method="POST"
  >
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email" >Email</label>
      <input type="email" class="form-control" id="email" name="email" required>
    </div>
    <button type="submit" class="btn btn-dark">Submit</button>
  </form>
</div>
</template>


<style scoped>

form{
  margin-left:23rem;
  padding:0%;
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
  height: 100vh;
}
}
  
</style>