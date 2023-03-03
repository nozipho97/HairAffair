<template>
    <div>
        <div class="field">
          <label class="label">Product Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Product Name"
              v-model="productName"
            />
          </div>
        </div>
      
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Price"
              v-model="productPrice"
            />
          </div>
        </div>
        <div class="control">
          <button class="button is-success" @click="updateProduct">UPDATE</button>
        </div>
      </div>
</template>

<script>

</script>