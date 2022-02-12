<template>
    <div class="galery w-100 h-75 align-self-center align-content-center">
        <vue-flux
            :options="vfOptions"
            :images="images"
            :captions="captions"
            :transitions="vfTransitions"
            :size="vfSize"
            :style="vfStyle"
            ref="slider"
        >

            <template v-slot:preloader>
                <flux-preloader />
            </template>

            <template v-slot:caption>
                <flux-caption />
            </template>

            <template v-slot:controls>
                <flux-controls />
            </template>

            <template v-slot:pagination>
                <flux-pagination />
            </template>

            <template v-slot:index>
                <flux-index />
            </template>
        </vue-flux>
    </div>
</template>

<script>
import {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
} from 'vue-flux';

export default {
    name: "Gallery",
    components: {
        VueFlux,
        FluxCaption,
        FluxControls,
        FluxIndex,
        FluxPagination,
        FluxPreloader,
    },
    data() {
        return {
            vfSize: "cover",
            vfStyle: "height: 600px; width: auto",
            vfOptions: {
                autoplay: true,
                infinite: true,
                enableGestures: true,
                delay: 3000,
//                aspectRatio: '4:3',
                bindKeys: true,
                allowFullscreen: true,
                lazyLoadAfter: 5,
            },
            vfImages: [
                'cowboy','ziel','fahrrad','haus_in_strasse','hooge_parking','nebel_morgen','nebel_steg',
                'venus','vw','hütte','watt','möwen','müritzsee','femö','pamina_helgoland','robben',
                'see','winter','sommer'
            ],
            vfTransitions: [
                'fade', 'kenburn',
                'swipe', 'slide',
                'waterfall', 'zip', 'blinds2d',
                'blocks1', 'blocks2',
                'concentric', 'warp', 'camera',
                'cube', 'book', 'fall',
                'wave', 'blinds3d',
                'round1', 'round2', 'explode'
            ],
        }
    },
    beforeMount() {
//        console.info(this.images)
    },
    computed: {
        images() {
            return this.vfImages.map(img => require("@/assets/img/" + img + ".jpg"))
        },
        captions() {
            return this.vfImages.map(img => "Caption for " + img)
        }
    }
}
</script>
<style scoped>
.galery {
    background-color: #333;
}
</style>
