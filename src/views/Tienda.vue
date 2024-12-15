<template>
    <div class="p-48 bg-stone-300">
        <header class="flex gap-10 justify-center">           
           <button v-on:click="navigateTo('products')">🧀 Mostrar nuestros quesos</button>
           {{ cart.length }}  artículos en el carrito
           <button v-on:click="navigateTo('cart')">Mostrar carrito 🛒</button>
        </header> 

        <div v-if="page === 'cart'">
         <Cart v-on:removeItemFromCart="removeItemFomCart"></Cart>
        </div>

        <div v-if="page === 'products'">
        <Products v-on:addItemToCart="addItemToCart"></Products>  
        </div>
    </div>  
       
    <!-- <Footer> -->

</template>


<script>
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';
import Footer from '../components/Footer.vue';


export default {
    name:"Tienda",
    data() {
    return {
        page:"products",
        cart:[],
        products: [{
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
        addItemToCart(product) {
            this.cart.push(product);
                   console.log(this.cart);                                
        },

        removeItemFomCart(product){
            this.cart.splice(this.cart.indexOf(product));
        },
        navigateTo(page) {
            this.page = page;
        }
       
        },
    components: {
        Products, Cart},
    }
    
    

</script>




<style scoped>  
.products{
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 30;
    justify-content: space-between;
}
header{
    height: 60 px;
    background-color: darkslategray;
    text-align:center;
  
    color:aliceblue;
    box-shadow: 2px 2px 5px #999;
    font-size: 20px;
    padding-top: 20px;
    padding-right: 8px;
}


</style>