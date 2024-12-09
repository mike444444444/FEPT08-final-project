<template>
    <div>
        <form class="flex flex-col items-center">
            <input class="border border-zinc-300 rounded-lg"
                 placeholder="Queso"
                 v-model="queso">
        
        
            <button class="bg-zinc-700 py-2 px-8 rounded-lg hover:bg-zinc-900"
                    @click.prevent="getQueso">
            </button>
        </form>
        
        <div v-if="cheese">
            <h2>Tipo de queso:{{cheese.name}}</h2>
            <p>Calorías:{{cheese.calories}}kcal</p>
            <p>Grasa:{{cheese.fat}}g</p>
            <p>Carbohidratos:{{cheese.carbs}}g</p>
            <p>Proteínas:{{cheese.protein}}g</p>
        </div>
        <p v-show="error" class="text-red-800 bg-red-200 py-10 text-center mt-10"
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