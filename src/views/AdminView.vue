<template>
    <div>
        <div class="container">
          <h2>Users</h2>
            <button
          class="btnAddUser"
          data-bs-toggle="modal"
          data-bs-target="#addAccomodation"
        >
          <i class="fa-solid fa-plus"></i> New User
        </button>
  <div class="row">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Gender</th>
      <th scope="col">Cell Number (+27)</th>
      <th scope="col">User Role</th>
      <th scope="col">Join Date</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="user in users" :key="user.userID">
      <td> {{ user.firstName }}</td>
      <td> {{ user.lastName }}</td>
      <td> {{ user.emailAdd }}</td>
      <td> {{ user.gender }}</td>
      <td> {{ user.cellphoneNumber }}</td>
      <td> {{ user.userRole }}</td>
      <td> {{ user.joinDate }}</td>
      <!-- <td>
        <img :src="user.userProfile" :alt=user.firstname>
      </td> -->
    </tr>
  </tbody>
</table>
  </div>
  </div>
    </div>

    <div>
      <div class="container">
        <h2>Products</h2>
          <button
        class="btnAddProduct"
        data-bs-toggle="modal"
        data-bs-target="#addAccomodation"
      >
        <i class="fa-solid fa-plus"></i> Add Product
      </button>
      <button  class="btnSort">
        <i class="fas fa-sort"></i> Sort by Price
      </button>
<div class="row">
  <table class="table">
<thead>
  <tr>
    <th scope="col">Product</th>
    <th scope="col">Price</th>
    <th scope="col">Category</th>
    <th scope="col">QTY</th>
    <th scope="col">Edit</th>
    <th scope="col">Delete</th>
  </tr>
</thead>
<tbody>
  <tr  v-for="product in products" :key="product.id">
    <td> {{ product.prodName }}</td>
    <td> {{ product.price }}</td>
    <td> {{ product.category }}</td>
    <td> {{ product.prodQuantity }}</td>
    <td><i class="fa-light fa-pen-to-square" @click="updateProduct"></i></td>
    <td><i class="fa-thin fa-delete-left" @click="deleteProduct(item.product_id)" ></i></td>
    </tr>
</tbody>
</table>
</div>
</div>
</div>

</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';




export default {

  setup() {
    const store = useStore();
    store.dispatch('fetchUsers');
    store.dispatch('fetchProducts');
    const users =
      computed(() => store.state.users);
    const products =
      computed(() => store.state.products);
    return {
      users, products

    }
  }
}


  
  
    
  




















// const sortbyPrice = document.querySelector(".btnSort");

//   sortbyPrice.addEventLister("click", (e) => {
//     product.sort((p1, p2) =>
//       p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
//     );
//     console.table(products);

    
//   })










</script>
<style>
.btnAddUser, .btnAddProduct, .btnSort{
  border: none;
  color:#633075;
  background-color: transparent;
  font-size: 1.5rem;
  margin:1rem;
}



</style>