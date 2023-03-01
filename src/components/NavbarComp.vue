<template>
   
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <img src="../assets/hair-affairs-high-resolution-color-logo.png" alt="logo">
            <a class="navbar-brand" href="#" style="color: #633075;">H A I R   A F F A I R S</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link to="/"><i class="fa-solid fa-house-user"> </i>HOME</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/Products"><i class="fa fa-store"></i>PRODUCTS</router-link>
                </li>
                <router-link to="/Admin"><i class="fa-solid fa-lock"></i>ADMIN</router-link>
                <router-link to="/Contact"><i class="fa-solid fa-address-book"></i>CONTACT</router-link>
                <router-link to="/Login"><i class="fa-solid fa-right-to-bracket"></i>LOGIN</router-link>
                <router-link to="/Register"><i class="fa-solid fa-registered"></i>REGISTER</router-link>

              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
    </nav>
</template>

<script>
// const hair = [straightHair, curlyHair, bodyWave];
// hair.sort();
// console.log(hair);
</script>

<style scoped> 
nav li{
  color: yellow;
}
</style>