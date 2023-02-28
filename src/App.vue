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
  color: yellow;
  background: fixed;
  background-color: black;
}
nav {
  padding: 50px;
}
nav a {
  font-weight: bold;
  color:black;
  text-decoration: none;
  padding-left: 20px;
}

</style>
