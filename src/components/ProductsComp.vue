<template>
  <h2>Our Products</h2>
   
    <div class="row">
      <div class="col-6 col-sm-4 " v-for="product in products" :key="product.id">
          <div class="card">
            <img v-bind:src="product.imgUrl" class="card-img-top" alt="product" >
            <div class="card-body">
              <h5 class="card-title">{{product.prodName}}</h5>
              <p class="card-text">R{{product.price}}</p>
              <a href="#" class="btn btn-dark">More details</a>
            </div> 
          </div>
          </div>
        
        
        
        
        </div>
       
    
    




      <!-- <div class="card" style="width: 15rem; justify-content:space-evenly;" v-for="product in products" :key="product.id">
        <img v-bind:src="product.imgUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{product.prodName}}</h5>
          <p class="card-text">R{{product.price}}</p>
          <a href="#" class="btn btn-dark">More details</a>
        </div> 
      </div> -->
    
  </template>
  <script>
  import { computed } from '@vue/runtime-core';
  import { useStore } from 'vuex';
  export default {
    setup() {
      const store = useStore();
      store.dispatch("fetchProducts");
      const products =
        computed(() => store.state.products);
      return {
        products,
      }
  
        
    }
      
  }
  </script>
  <style scoped>
 
  .card{
    padding: 0.5rem;
    margin: 0.8rem;
    width:25rem;
  
  }
 
      
  </style>