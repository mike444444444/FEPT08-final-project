<template>
    <div class="p-2">
        <p class="text-center text-gray-700  text-base"><i>Tu carrito con los productos seleccionados:</i></p>
        
        <div class="flex gap-10 mt-8 text-center">
            <div v-for="(product, index) in cart" :key="index">{{ product.name }}    
            <div>{{ product.milk }}</div>
            <div>{{ product.weight}}</div>
            <div>{{ product.price}}</div>
            <button class="eliminar" v-on:click="removeItemFromCart(product)">eliminar del 🛒
            </button> 
            </div>     
        </div>
    </div>
   
    <div class="btn ">  
     
      <i class ="fa fa-cog fa-6" id="setting"></i>
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
.eliminar{
    background-color:steelblue;
    border-radius: 1ch;
    color:lightgray;
    margin-top: 10px;
}
.btn {
  background: #38925e;
  width: 170px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden; 
  position: fixed;
}

.btn:before {
  content: "🚎";
  color: #FFF;
  font-family: arial;
  font-size: 20px;
  line-height: 50px;
  position: absolute;
  margin: auto;
  margin-left: 50%;
  transition: all 1s ease-in-out;
  transform: translate(-50%, 0%);
}

.btn:hover:before {
  position: absolute;
  transform: translateX(100px);
  transition: all 1s ease-in-out;
}

#setting {
  color: #FFF;
  font-size: 25px;
  margin: auto;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  transform: translateX(-120px);
  transition: all 1s ease-in-out;
}

.btn:hover #setting {
  transform: translateX(0px);
  animation: setting 2s ease-in-out infinite;
  animation-delay: .9s;
  transition: all 1s ease-in-out;
}

@keyframes setting {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}






</style>