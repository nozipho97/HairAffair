<template>
  
  <NavbarComp/>
  <router-view/>
  <FooterComponent/>
 
 
  
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    NavbarComp,
    FooterComponent
  
  }
}
</script>

<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background: fixed;
  background-color: white;
}
nav {
  padding: 50px;
}
nav a {
  font-weight: bold;
  
  text-decoration: none;
  padding-left: 20px;
}
h2{
  
  text-align: center;
  font-weight: bold;
  font-size:5rem;
}


</style>
