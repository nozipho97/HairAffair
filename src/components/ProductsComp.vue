<template>
  <h2>Our Products</h2>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" style="width:50rem; margin-left:50rem;" aria-label="Search"
    v-model="SearchItem">

    <button class="btn btn-outline-dark" type="submit" style="margin-left:50rem; margin-top:2rem;">Search</button>
  </form>
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
        products
      }
    },
    // computed: {
    //   products() {
    //     return this.store.products
    //   },
    //   retrieveProducts() {
    //     return product.filter((item) => {
    //       item.prodName == SearchItem
    //     }
    //     )
    //   },
  // },
  }
  
  
  

  </script>
  <style scoped>
  
  .card{
    padding: 0.5rem;
    width:25rem;
  
  }
 
      
  </style>