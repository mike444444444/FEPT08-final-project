<template>
  <div class="p-48 bg-stone-300">    
    <p class="text-neutral-800 f text-sm text-align-center p-4">PRUEBA API  
    </p>    
  </div>

  <div class="bg-stone-300">
      <form class="flex flex-col items-center gap-4">
        <input
          class="border border-zinc-300 rounded-lg text-center text-neutral-400"
         placeholder="city name"
         v-model="location"/>

        <button class="bg-zinc-500 py-2 px-8 rounded-lg hover:bg-zinc-800 text-white"
         @click.prevent="getWeather">Comprobar
        </button>
      </form>
  </div>

  <div if="weather">
      <p>city name:{{ weather.name }}</p>
      <p>temperatura:{{ weather.main.temp }}ºC</p>
  </div>
    
    <p v-show="error" class="text-red-800 bg-red-200 py-6 text-center mt-6">
      Población no encontrada, prueba con otra población
    </p>
    <p v-show="loading" class="text-3xl text-indigo-400">cargando.....</p>
  <!-- </div> -->
</template>

<script>
export default {
  name: "ValoresNutricionales",
  data() {
    return {
      loading: false,
      location: "",
      weather: null,
      error: false,
      API_KEY: "6543c92365524e8d2978a6195c3ff36f",
    };
  },
  methods: {
    getWeather() {
      this.error = false;
      this.loading = true;
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

<style></style>