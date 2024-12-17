<template>
 <!--fondo pantalla-->
  <div class="fondo p-48">
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  <!--texto explicativo-->
    <h1 class="text-center font-semibold text-xl">Te invitamos a conocer nuestro entorno rural</h1>
    <p class="text center font-medium">Puedes conocer en qué condiciones viven nuestras protagonistas</p>
    <p class="text center font-medium">La queseria, ubicada en Gósol</p>
    <p class="text center font-medium">Donde pastan nuestras ovejas, en Tuixent</p>
    <p class="text center font-medium">A más altura, nuestras cabras, en Bolvir (Cerdanya)</p>
    <p class="text center font-medium">Introduce el nombre de la población para observar en qué condiciones se encuentra
      nuestra ganadería:</p>
 <!--formulario consulta tiempo actual con API-->
    <form class="flex flex-col items-center gap-4">
      <input class="border border-zinc-300 rounded-lg text-center text-neutral-400"
        placeholder="población"
        v-model="location"/>

      <button class="bg-blue-500 py-2 px-8 rounded-lg hover:bg-zinc-800 text-white"
        @click.prevent="getWeather">Comprobar
      </button>
    </form>
 <!--respuesta con tiempo actual-->
    <div if="weather">
      <p>city name:{{ weather?.name }}</p>
      <p>temperatura:{{ weather?.main.temp }}ºC</p>
    </div>
    
    <p v-show="error" class="text-red-800 bg-red-200 py-6 text-center mt-6">
      Población no encontrada, prueba con otra población
    </p>
    <p v-show="loading" class="text-3xl text-indigo-400">cargando.....</p>
 <!--formulario visita a la quesería-->
  <div class="mt-10">
    <h1 class="text-center font-bold text-xl">Visita nuestras instalaciones</h1>
    <p class="text-center font-medium text-base"><i>Rellena el formulario y nos pondremos en contacto contigo para organizar la visita a nuestras instalaciones</i></p>
    <div class="flex flex-col items-center"> 
      <form action class="form" @submit.prevent="contact">
      <label class="form-label" for="#name">Nombre</label>
      <input
        v-model="name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Nombre"
      />
      <label class="form-label" for="#email">e-mail</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        placeholder="Email"
      />
     
    </form>
    <button class="contactar ml-6 mt-10"></button>
    </div>  
   
  </div>
  </div>
</template>

<script>
export default {
  name: "venAConocernos",
  data() {
    return {
      loading: false,
      location: "",
      weather: null,
      error: false,
      API_KEY: "38c27053c3f119546a532a6081dc358d",
    };
  },
  methods: {
    getWeather() {
      this.error = false;
      this.loading = true;
      this.weather = null;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.API_KEY}&units=metric`)
        .then((response) => {
          if (!response.ok) {
            this.loading = false;
            this.error = true;
          throw newError(`Población no encontrada, prueba con otra población ${response.status}`);
          }
            console.log(response);
            return response.json();
        })
        .then((data) => {
          this.weather = data;
          this.loading = false;
          return this.weather;
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
          console.log(error);
        });
     },
  },
}

</script>

<style>
.fondo{
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: auto;
    background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
}

@keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

.wave {
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: wave 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;
}

.wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
}

.wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
}

@keyframes wave {
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
}


.contactar {
  background: #38925e;
  width: 170px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
    top: 10 px;
  bottom: 0;
  left: 0;
  right: 0;
}

.contactar:before {
  content: "📨";
  color: #FFF;
  font-family: arial;
  font-size: 20px;
  line-height: 50px;
  position:relative;
  margin: auto;
  margin-left: 50%;
  transition: all 1s ease-in-out;
  transform: translate(-50%, 0%);
}

.contactar:hover:before {
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

.contactar:hover #setting {
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