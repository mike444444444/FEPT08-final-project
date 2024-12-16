<template>
    <div class="p-40 bg-stone-300">
        <h1 class="text-center text-red-600 font-bold text-xl">¡ Bienvenidos a nuestra tienda !</h1>
        
        

        <div class="header flex gap-16 justify-center mt-8">           
           <button class="hover:text-yellow-300" v-on:click="navigateTo('products')">🧀 Mostrar nuestros quesos</button>
           {{ cart.length }}  artículos en el carrito
           <button class="hover:text-yellow-300" v-on:click="navigateTo('cart')">Mostrar carrito 🛒</button>
        </div> 

        <div v-if="page === 'cart'">
       
         <Cart :cart="cart"
         v-on:removeItemFromCart="removeItemFromCart"></Cart>
        </div>

        <div v-if="page === 'products'">
        <Products v-on:add-item-to-cart="addItemToCart"></Products>  
        </div>
    </div>  
       
   <Footer></Footer>

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
        img: "src/imagenes.pastoret.jpg",
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

        removeItemFromCart(product){
            this.cart.splice(this.cart.indexOf(product),1);
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
.header{
    height: 60 px;
    background-color: darkslategray;
    text-align:center;  
    color:aliceblue;
    box-shadow: 2px 2px 5px #999;
    font-size: 20px;
    padding-top: 20px;
    padding-right: 8px;
    cursor:pointer;
    
    
}


</style>