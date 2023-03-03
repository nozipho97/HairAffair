<template>
    <div class="card" style="width: 18rem;" v-for="product in products" :key="product.prodID">
        <img v-bind:src="product.imgURL" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{product.prodName}}</h5>
          <p class="card-text">{{product.price}}</p>
        </div> 
      </div>
</template>

<script>

</script>