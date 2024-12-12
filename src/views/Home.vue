<template>
    
      <div class="mainContainer">
      <h2 class="text-4xl text-end text-bold p-20 text-gray-900">{{title}}</h2> 
      </div>

      <div class="bg-slate-300 p-8 shadow-xl">
        <p class="text-gray-800 text-l text-bold border-y-gray-600 text-center"><i>Quesos artesanales de oveja y de cabra.</i></p>
        <p class="text-gray-600 text-l text-bold border-y-gray-600 text-align:center px-32 "><i>Nuestro proceso artesanal y la calidad de la leche de nuestras ovejas y cabras nos permite elaborar quesos artesanos gourmet que sorprenderán 
          a cualquier amante de los quesos. Tanto el queso de leche cruda de oveja como el curado de oveja hechiza a los paladares más exigentes.
          El sabor de los quesos elaborados con la leche de nuestras cabras no dejará indiferente a los comensales.</i></p>
        </br>
        <p class="text-gray-800 text-l text-bold border-y-gray-600 text-center"><i>Prueba nuestros quesos artesanales.</i></p>
      </div>

      <div class="midContainer shadow-xl">
        <div class="grid grid-cols-4 place-items-center  p-8 gap-10 bg-gray-200">
          <div>
             <img class="w-60 h-60 border-2 rounded-lg ;" src="/src/imagenes/quesosdeoveja.jpg">
             <a href="#" class="text-sm  text-gray-700 hover:text-red-600 underline">Nuestros quesos de oveja</a>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2016 2048"><path fill="currentColor" d="M568 787q9 2 30 2q8 0 16.5-2t15-4t15-7.5t13-8.5t14-11t12-10t12.5-11.5t11-10.5q20 44 59.5 77.5T849 835q55 0 98-41.5t55-97.5q72 76 133 76q37 0 74-21t64-52q13 62 63.5 107.5T1448 852q20 80 20 164q0 154-40 280t-107 205.5t-150 122t-173 42.5q-90-1-173-43.5T675 1501t-107.5-205t-40.5-280q0-111 41-229zm168 174q-34 0-62 27.5t-28 62.5q0 34 24.5 58.5T729 1134q36 0 63.5-28t27.5-62v-4q-29 18-36 18q-20 0-34-14.5t-14-34.5q0-18 28-43q-15-5-28-5zm532 0q-34 0-63 27.5t-29 62.5q0 34 25.5 58.5t59.5 24.5q35 0 62-28t27-62v-4q-29 18-36 18q-20 0-33-14t-13-35q0-20 26-43q-15-5-26-5zM671 239q29-71 81.5-121T867 44.5T998 21t131 23.5t114.5 73.5t81.5 121q60-24 121.5-25.5t115 17.5t101 52t80 80.5t51 101t16 115.5t-27.5 122q106 42 162 135.5t51.5 199T1931 1227q15 66 4 122q-8 51-35 80.5t-72 22.5q-3-1-9.5-2.5t-9.5-2.5q8 73-15.5 143t-70 121.5t-111 86.5t-138 36.5T1324 1807q-36 82-103 136t-145 68.5t-156 0t-144.5-68.5T674 1807q-77 29-150.5 27.5T386 1798t-111-86.5t-70.5-121.5t-15.5-143q-3 1-8.5 2.5t-8.5 2.5q-46 7-74.5-22.5T59 1349q-10-53 5-122q-61-85-64.5-191t54-198.5T216 702q-25-60-27.5-122T204 464.5t50.5-101T334 283t100.5-52t115-17.5T671 239zm854 578q-1-3 27.5 10.5T1627 870t96 68t100 94.5t79 113.5q29-56 29.5-117.5t-25-117t-83-101.5t-137.5-69q41-73 49.5-146T1725 464.5t-62-101t-100.5-63.5t-131-12.5T1284 335q-22-80-68-137t-101-83.5T998 88t-117 26.5T780 198t-68 137q-74-40-147-47.5T434.5 300T334 363.5t-62 101T262 595t50 146q-81 23-138.5 69T90 911.5t-25.5 117T94 1146q29-58 79-113.5T273 938t95.5-68t74-43t26.5-10q-36 77-37.5 174.5T458 1161q-12 20-38.5 86.5t-60 107T266 1422q-16 74 .5 141t60 112t102.5 69.5t134 16.5t149-49q23 79 69 135t100.5 82t116.5 26t116.5-26t100.5-82t69-135q74 41 149 49t134.5-16.5t103-69.5t60-112t.5-141q-47-21-80-55t-47-63.5t-33-74.5t-32-68q27-72 24.5-169T1525 817z"/></svg>
             <router-link to="/quesosOveja"></router-link>
            </div>
          <div>
             <img class="w-60 h-60 border-2 rounded-lg" src="/src/imagenes/quesosdecabra.jpg">
             <a href="#" class="text-sm text-gray-700 hover:text-red-600 underline">Nuestros quesos de cabra</a>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="currentColor" d="m273 459l7.79-20l6.21 20l5.79-23.33l-4.25-48c-7.76 7.94-17.54 17.85-29.74 30.27zm38.5-380.86a115.06 115.06 0 0 0-21.13-19.6c-17.315-11.88-35.418-18.913-55.08-22.14c-18.751-3.067-37.99-2.743-56.33.12A203.86 203.86 0 0 0 133 49.42a184.2 184.2 0 0 0-29.62 15.36c-12.304 8.597-10.431 6.828.95 1.82a179.6 179.6 0 0 1 30.9-10c50.427-4.832 98.41-7.579 134.17 27.17a80 80 0 0 1 12.28 16c4.714 8.06 7.805 16.877 9.66 25.59l45.69 2.84c-5.032-17.752-15.256-37.574-25.53-50.06zm50.05 26.63c-8.531-13.217-18.495-25.428-29.66-34.88a78.24 78.24 0 0 0-15.79-10.38c2.67 2.68 5.22 5.45 7.61 8.32a138.13 138.13 0 0 1 9.13 12.11l.1.14l.09.14c9.772 15.14 17.164 33.862 20.78 49.15l22.19 1.3a253.49 253.49 0 0 0-14.43-25.91zm29.89 43l70 179.4l-11.82 28.37l-65.77-37.94l-8 13.86l67.56 39l-4.327 5.754L394.12 372l-65.33-31.47a42.41 42.41 0 0 0-9.29-1.43c-5.71 0-9.52 2.06-12.71 6.62c-2.53 3.61-78.5 80.52-147.64 150.28H16V243.73l92.85 3.85l96.61-33.26l10.13-11a214.71 214.71 0 0 1 38 24.27a18.57 18.57 0 0 0 11.61 3.93c13.792-1.574 22.025-9.12 32.83-17.83c-3.267-21.244-6.724-43.71-9.56-62.1c-6.463-2.155-12.926-4.308-19.39-6.46l4.39-4.78zm-37.25 65.02c-4.024-14.705-20.114-19.427-30.58-18.14c-3.073.432-6.167 1.427-8.77 2.68c.868 3.09 2.17 7.87 3.79 10.35c6.527 9.211 17.348 13.898 27.64 12.51c3.967-.672 8.94-3.676 7.92-7.4zm61.63 105.47l19 20l11.6-11l-19-20zM475 172.99s-40.54-27.8-57-1.2l11.25 28.83zM294 382.05l13.4 22.28l-.4-35.64c-3.29 3.45-7.53 7.82-12.95 13.36zm-30.6-167c5.858 1.872 17.61-6.048 17.33-8.01l-6.67-43.33l-28-9.31c-17.65-2.861-58.224-4.989-67.27 9.28c39.596 39.732 39.526 16.87 84.61 51.37zm127.08 172.89c-15.313-7.704-30.838-14.996-46.28-22.44c5.153 29.387 10.895 58.672 15.75 88.11l25.26 37.33l-2.6-34L400 469.61v-28.67l10.19-41.95l6.67-11.05z"/></svg>
          </div>
        </div>
      
      </div>

      <div class="flex place-content-around p-8  bg-slate-300 gap-2 shadow-xl">
        <img class="w-24 h-24" src="/src/imagenes/Venda.png" alt="logotipo de venta de proximidad">
        <img class="w-24 h-24 rounded-lg" src="/src/imagenes/biosphere.jpg" alt="logotipo certificado Biosphere">
        <img class="w-24 h-24 rounded-lg" src="/src/imagenes/greenfarm.jpg">
        <img class="w-24 h-24 rounded-lg" src="/src/imagenes/ecos.jpg">
      </div>

      






    <div class="footer">
    <h2 class="bg-stone-800 text-white text-xl text-center p-4">El pastoret</h2>
      <div class="flex flex-row items-center justify-between bg-stone-800 p-4 text-white">        
        <p class="text-left text-xs ml-12 text-yellow-100">Mas Girbau s/n  25716 Gósol (Lleida) Tel.992 256 839</p>
        <div class="flex flex-row space-x-4 mr-28">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
            <g fill-opacity="0.4902" fill="#fcc419" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h10v-9h-3v-3h3v-1.611c0,-3.05 1.486,-4.389 4.021,-4.389c1.214,0 1.856,0.09 2.16,0.131v2.869h-1.729c-1.076,0 -1.452,0.568 -1.452,1.718v1.282h3.154l-0.428,3h-2.726v9h5c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
            <g fill-opacity="0.4902" fill="#fcc419" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
            <g fill-opacity="0.4902" fill="#fcc419" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M5,5v22h22v-22zM7,7h18v18h-18zM16,11.08008c0,0 -4.3907,-0.00094 -5.4707,0.28906c-0.6,0.17 -1.08023,0.64 -1.24023,1.25c-0.29,1.09 -0.28906,3.39062 -0.28906,3.39062c0,0 -0.00094,2.30039 0.28906,3.40039c0.16,0.6 0.64023,1.0607 1.24023,1.2207c1.08,0.29 5.4707,0.28906 5.4707,0.28906c0,0 4.3907,0.00094 5.4707,-0.28906c0.6,-0.17 1.08023,-0.62047 1.24023,-1.23047c0.29,-1.09 0.28906,-3.39062 0.28906,-3.39062c0,0 0.00094,-2.29062 -0.28906,-3.39062c-0.16,-0.61 -0.64023,-1.08 -1.24023,-1.25c-1.08,-0.29 -5.4707,-0.28906 -5.4707,-0.28906zM14,13.15625l5,2.85547l-5,2.8418z"></path></g></g>
            </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
            <g fill-opacity="0.4902" fill="#fcc419" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M6,4c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM8.64844,9h4.61133l2.69141,3.84766l3.33008,-3.84766h1.45117l-4.12891,4.78125l5.05078,7.21875h-4.61133l-2.98633,-4.26953l-3.6875,4.26953h-1.47461l4.50586,-5.20508zM10.87891,10.18359l6.75391,9.62695h1.78906l-6.75586,-9.62695z"></path></g></g>
            </svg>
        </div> 
        <a href class="text-yellow-100 text-xs mr-12 mailto:formatgeselpastoret@mail.com">formatgeselpastoret@mail.com</a>
    </div>
    <div class="flex flex-row bg-stone-800 text-xs text-yellow-100 justify-center space-x-4 p-4">
        <p><u>Blog</u></p>
        <p><u>Nota Legal</u></p>
        <p><u>Política de Privacidad</u></p>
        <p class="mb-6"><u>Política de Cookies</u></p>
       
    </div>

   </div>
</template>

<script>
import QuesosOveja from '/src/views/QuesosOveja.vue'

export default {
    name: "Home",
    data(){
        return{    
        title: "Quesos artesanos de oveja y de cabra"
     }
    }
  }

</script>
<style>
    
</style>