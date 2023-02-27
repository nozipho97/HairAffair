<template>
   
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <img src="../assets/hair-affairs-high-resolution-color-logo.png" alt="logo">
            <a class="navbar-brand" href="#">Hair Affairs</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Our Products</a>
                  
                </li>
                <li class="nav-item"> <a class="nav-link" href="#">Admin</a></li>
                <li class="nave-item"><a class="nav-link" href="#">Contact</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hair
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Straight Hair</a></li>
                    <li><a class="dropdown-item" href="#">Curly Hair</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Body Wave Hair</a></li>
                  </ul>
                </li>

              </ul>
              <form class="d-flex" role="search">
                <button type="button" class="btn btn-warning" style="">Login</button>
                <button type="button" class="btn btn-warning">Register</button>
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
nav{
  color: yellow;
}
</style>