<template>
 <div class="bg-stone-300">
    <div class="Historia mt-28">
        <h3 class="text-center font-extrabold text-red-700 p-2">Historia</h3>
        <div class="flex flex-row">    
            <img class="border-2 rounded-lg border-gray-600 object-cover w-100 h-60 ml-14 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-125 " src="/src/imagenes/historia.jpg" alt="foto del año 1956 de la familia en la quesería">
            <p class="p-14 mr-8">En 1956 la familia Codina empezó a elaborar artesanalmente quesos con la leche de su propia ramaderia.
                   Una tradición que se ha mantenido con la tercera generación al frente, conservando el espíritu inicial
                   de los pioneros, manteniendo el proceso artesanal, lo que nos permite ofrecer una gama de exquisitos quesos
                   artesanales con todas las propiedades y sabores de la leche de nuestras ovejas y cabras.
            </p>            
        </div>
    </div>

    <div class="mt-6 NuestraFinca">
        <h3 class="text-center font-extrabold text-red-700">Nuestra finca</h3>
        <div class="flex flex-row"> 
        <p class="p-14 mt-8 ">La quesería se ubica en la finca Mas Girbau, una finca rural ubicada en Gósol, en la comarca del Berguedá.
           Conscientes del privilegio de la zona, desarrollamos nuestra actividad en armonía con el territorio, 
           respetando los espacios y los ritmos del paisaje que nos rodea.
        </p>   
        <img class="border-2 rounded-lg border-gray-500 object-cover w-80 h-60 mt-4 mr-16" src="/src/imagenes/finca.jpg">        
        </div>
    </div>

    <div class="mt-8 NuestraGanaderia">
        <h3 class="text-center font-extrabold text-red-700 mt-4">Nuestra ganadería</h3>
        <div class="flex flex-row"> 
        <img class="border-2 rounded-lg border-gray-500 object-cover w-40 h60 mt-4 ml-10" src="/src/imagenes/ovejas4.jpg">
        <img class="border-2 rounded-lg border-gray-500 object-cover w-40 h60 mt-4 " src="/src/imagenes/cabra1.jpg">
        <p class="p-24 ">La producción artesanal de nuestros quesos procede de la leche de nuestra propia ganadería, compuesta por 300
           ovejas y 140 cabras, ambas de raza autóctona catalana, originarias del Pirineo. La calidad de los pastos y la selección de nuestra ganadería es la clave
           del sabor auténtico de nuestros productos.
        </p>
        </div>
    </div>

    <div class="Elaboracion mt-8">
        <h3 class="text-center font-extrabold text-red-700 mt-4">Elaboración artesanal</h3>
        <div class="flex flex-row"> 
        <p class="p-16 mt-2">Aplicamos únicamente técnicas artesanales heredadas en la elaboración de nuestros quesos con tal de poder mantener 
           el nivel de calidad y lograr que el consumidor pueda disfrutar de los sabores de cada especialidad.
           Se trata de una producción basada en ramadería y producción ecológica y manteniendo los estándares de elaboración de la D.O. Formatges del Berguedá.
        </p>
        <img class="border-2 rounded-lg border-gray-500 object-cover w-80 h-60 mt-4 mr-16" src="/src/imagenes/elaboracion3.jpg">
        </div>
    </div>

 </div>
    <h2 class="bg-stone-800 text-white text-xl text-center">El pastoret</h2>
    <div class="flex flex-row justify-between bg-stone-800 p-4 gap-8 text-white">        
        <p class="text-left font-thin text-white">Mas Girbau s/n  25716 Gósol (Lleida) Tel.992 256 839</p>
       <a href="mailto:formatgeselpastoret@mail.com">formatgeselpastoret@mail.com</a>
    </div>
</template>
<script>
export default {
    name: "QuienesSomos",
  data(){
    return{      
    }
  }  
}

</script>
<style>
    
</style>