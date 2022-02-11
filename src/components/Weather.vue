<template>
    <div>
        <div class="row">
            <div class="col">
                <b-form @submit.prevent="getWheater">
                    <input type="text" v-model="city" placeholder="Stadt eingeben" />
                    <input type="submit" value="Search" />
                </b-form>
            </div>
        </div>
        <div class="row mt-5" v-if="data">
            <div class="col">
                <h3><img :src="data.icon" /> {{ data.text }}</h3>
                <p>Temparatur: {{ data.temp }} °C</p>
                <p>Sonneaufgang: {{ data.sunrise }} Uhr</p>
                <p>Sonnenuntergang: {{ data.sunset }} Uhr</p>
            </div>
        </div>
        <h5 v-else class="mt-5">Bitte den Namen einer Stadt eingeben</h5>
    </div>
</template>

<script>
/* global axios */
export default {
    name: "Weather",
    data() {
        return {
            city: null,
            data: null,
        }
    },
    methods: {
        getWheater() {
            let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&lang=de&units=metric&APPID="+process.env.VUE_APP_WHEATER_APPID;
            axios.get(apiUrl)
                .then(resp => {
                    let w = resp.data.weather[0],
                        m = resp.data.main,
                        s = resp.data.sys;

                    this.data = {
                        text: w.description,
                        icon: "http://openweathermap.org/img/w/" + w.icon + ".png",
                        temp: Math.round(m.temp),
                        sunrise: (new Date(s.sunrise * 1000)).toLocaleTimeString(),
                        sunset: (new Date(s.sunset * 1000)).toLocaleTimeString(),
                    }
                })
                .catch(err => {
                    console.info(err.response.data.message)
                });
        }
    }
}
</script>

<style scoped>
</style>
