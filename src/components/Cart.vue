<template>
    <div class="p-2">
        <p class="text-center text-gray-700  text-base"><i>Tu carrito con los productos seleccionados:</i></p>
        <div class="flex gap-10 mt-8">
            <div v-for="(product, index) in cart" :key="index">{{ product.name }}    
            <div>{{ product.milk }}</div>
            <div>{{ product.weight}}</div>
            <div>{{ product.price}}</div>
            <button v-on:click="removeItemFromCart(product)">Eliminar del 🛒
            </button> 
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: ["cart"],
    methods: {
        removeItemFromCart(product) {
            this.$emit('removeItemFromCart', product);
        }
        
    },
    
}
</script>
<style>
    
</style>