<template>
    <h1 class="mt-10 text-center text-2xl font-bold text-red-800"><i>Nuestros quesos</i></h1>
    <div class="products">
            <div v-for="(product,index) in products" :key="product.name">{{ product.name }}    
            <div>{{ product.milk }}</div>
            <div>{{ product.weight}}</div>
            <div>{{ product.price}}</div>
            <button v-on:click="addItemtoCart(product)">Añadir al 🛒
            </button>          
         </div>  
    </div>
</template>
<script>
export default {
    data() {
        return {
        products: [
            {
        id:1,
        name: "pastoret",
        img:"/src/imagenes/juliette.jpg", 
        milk: "oveja",
        price:"24 €",
        weight: "500 gr.",
    },
    {
        id:2,
        name: "barroc",
        img: "./src/imagenes/barroc.jpg",
        milk: "oveja",
        price:"29 €",
        weight: "500 gr.",
    },
    {
        id:3,
        name: "tófona",
        img: "./src/imagenes/tofona.jpg",
        milk: "oveja",
        price:"36 €",
        weight: "500 gr.",
    },

    {
        id:4,
        name: "cendrat",
        img: "./src/imagenes/cendrat.jpg",
        milk: "cabra",
        price:"21 €",
        weight: "250 gr.",
    },

    {
        id:5,
        name: "petricó",
        img: "./src/imagenes/petrico.jpg",
        milk: "cabra",
        price:"18 €",
        weight: "200 gr.",
    },

    {
        id:6,
        name: "juliette",
        img: "./src/imagenes/juliette.jpg",
        milk: "cabra",
        price:"30 €",
        weight: "300 gr.",
    },  
        ]
    }
    
 },
   methods: {
    addItemtoCart(product) {
        this.$emit("addItemTCart",product);
    }
    
   },
}
</script>

<style scoped>  
.products{
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 30;
    justify-content: space-between;
    margin-top: 40px;
    text-align: center;
}
.products button{
    background-color:teal;
    border-radius: 1ch;
    color:lightgray;
    margin-top: 10px;
    
}


</style>