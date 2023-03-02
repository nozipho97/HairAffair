<template>
  <ProductsComp/>
  <SpinnerComponent/>
</template>

<script>
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import ProductsComp from '../components/ProductsComp.vue';


export default {
    
    components: { ProductsComp, SpinnerComponent }
}

</script>