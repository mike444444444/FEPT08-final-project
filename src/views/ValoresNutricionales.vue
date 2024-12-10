<template>
    <div class="p-28 bg-stone-300">
        <p class="text-neutral-900 font-bold text-xl text-center"><i>Valores nutricionales</i></p>
        <p class="text-neutral-800 f text-sm text-align-center  p-4"><i>Como productores de quesos, apoyamos la divulgación del conocimiento 
            del queso. Colaboramos, a nivel local y nacional, en programas de difusión y promoción de las propiedades nutricionales del queso.
            Os presentamos una herramienta interactiva en la que vais a poder comprobar los valores nutricionales de diversos tipos de quesos,
            tanto nacionales como internacionales.</i>
        </p>
        <p class="text-neutral-600 font-bold text-sm text-align-center  p-4"><i>Introduce el nombre del queso del que quieras conocer sus propiedades nutricionales y composición:</i>
        </p>
    </div>  
    <div class=" bg-stone-300">
        <form class="flex flex-col items-center gap-4">
            <input class="border border-zinc-300 rounded-lg text-center text-neutral-400"
                 placeholder="Nombre del queso"
                 v-model="queso">        
        
            <button class="bg-zinc-500 py-2 px-8 rounded-lg hover:bg-zinc-800 text-white"
                    @click.prevent="getQueso">Comprobar
            </button>
        </form>
        
        <div v-if="cheese">
            <h2>Tipo de queso:{{cheese.name}}</h2>
            <p>Calorías:{{cheese.calories}}kcal</p>
            <p>Grasa:{{cheese.fat}}g</p>
            <p>Carbohidratos:{{cheese.carbs}}g</p>
            <p>Proteínas:{{cheese.protein}}g</p>
        </div>
        <p v-show="error" class="text-red-800 bg-red-200 py-6 text-center mt-6"
           >Queso no he encontrado, prueba con otro tipo de queso</p> 
        <p v-show="loading" class="text-3xl text-indigo-400">cargando.....</p>
        
    </div>
</template>

<script>
export default {
    name:"ValoresNutricionales",
    data(){
        return{
            loading: false,
            queso:"",
            cheese: null,
            error: false,
            API_KEY: "15bf9d10955e4a4caae646b9f6768a76",
        };
    },
    methods: {
        getQueso(){
            this.error= false,
            this.loading= true;
            fetch(`https://platform.fatsecret.com/rest/food/v4? q= ${this.queso}&appid=${this.API_KEY}`)
            .then((response)=>{
                if(!response.ok){
                    this.loading= false;
                    this.error= true;
                throw newError(`Queso no he encontrado, prueba con otro tipo de queso ${response.status}`);
                }
                return response.json();
            })
            .then((data)=>{
                this.cheese= data;
                this.queso= false;
                return this.cheese;
            })
            .catch((error)=>{
                this.queso= false;
                this.error= true;
                console.log(error);
            });
        
            },
        },
        
    };
   

</script>


<style>
    
</style>