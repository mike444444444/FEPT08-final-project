<template>
    <div class="p-32">
        <div class="btn">
  
  <i class="fa fa-cog fa-6" id="setting"></i>
  
</div>
</div>
</template>


<script>

export default {
  name:"Carrito",
    data() {
      return {
      }
    }    
}
</script>

<style scoped>
.btn {
  background: #38925e;
  width: 170px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  /*To Make Div In Center*/
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.btn:before {
  content: "Setting";
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