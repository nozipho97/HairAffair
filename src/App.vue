<template>
  <NavbarComp/>
  <!-- <FooterComp/> -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <router-view/>
  
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
// import FooterComp from './components/FooterComp.vue';
export default {
  components: {
    NavbarComp,
    // FooterComp
  }
}
</script>

<style>

</style>
