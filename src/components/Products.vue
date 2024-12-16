<template>
    <p class="text-center text-gray-700  text-base"><i>Agrega al carrito los productos que quieras comprar</i></p>
    <div class="products mt-4">
        <div v-for="(product,index) in products" :key="product.name">{{ product.name }}    
            <div>{{ product.milk }}</div>
            <div>{{ product.weight}}</div>
            <div>{{ product.price}}</div>
            <button v-on:click="addItemToCart(product)">añadir al 🛒
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
    addItemToCart(product) {
        this.$emit("addItemToCart",product);
    }
   },
   emits:['addItemToCart']
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
    /* background-color:teal;
    border-radius: 1ch;
    color:lightgray;
    margin-top: 10px; */
  width: 140px;
  height: 35px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 400;
  color: #000;
  background-color:rgb(64, 111, 111);
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  }

.products button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}



</style>