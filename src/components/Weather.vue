<template>
    <div>
        <div class="row">
            <div class="col">
                <input type="text" v-model="city" placeholder="Stadt eingeben" />
                <b-button  @click="getWheater" class="btn-sm btn-primary">
                    <font-awesome-icon icon="cloud-sun"/>
                </b-button>
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
            lang: null,
        }
    },
    beforeCreate() {
        this.lang = this.$store.state.locale.lang
        this.$store.commit('locale/mRemoveLang')
    },
    beforeDestroy() {
        this.$store.commit('locale/mSetLang', this.lang)
    },
    methods: {
        getWheater() {
            let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&lang=de&units=metric&APPID="+process.env.VUE_APP_WEATHER_APPID;
            axios.get(apiUrl)
                .then(resp => {
                    let data = resp.data,
                        w = data.weather[0],
                        m = data.main,
                        s = data.sys;

                    this.data = {
                        text: w.description,
                        icon: "http://openweathermap.org/img/w/" + w.icon + ".png",
                        temp: Math.round(m.temp),
                        sunrise: (new Date(s.sunrise * 1000)).toLocaleTimeString(),
                        sunset: (new Date(s.sunset * 1000)).toLocaleTimeString(),
                    }
                })
                .catch(err => {
                    console.info(err)
                });
        }
    }
}
</script>

<style scoped>
</style>
