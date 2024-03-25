<template>
    <div class="progressbar">
        <h3 style="color: white;">PRE-TRAINING</h3>
    </div>

    <div class="selectImage">
        <div class="cont">
            <component :is="componenteDinamico" />
            <button class="btn btn-primary btn-lg" v-if="button" @click="fun">CONTINUE</button>
            <RouterLink to="/test/training">
                <button class="btn btn-primary btn-lg" v-if="!button" @click="fun">GO TO TRAINING</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>

import ComponentA from './components/preTrainingA.vue'
import ComponentB from './components/preTrainingB.vue'
import ComponentC from './components/preTrainingC.vue'
import ComponentD from './components/preTrainingD.vue'


export default {
    data() {
        return {
            componenteDinamico: 'ComponentA',
            slide: 1,
            button: true,
        }
    },
    methods: {
        fun() {
            if (this.slide == 1) {
                this.componenteDinamico = 'ComponentB'
                this.slide++;
            }
            else if (this.slide == 2) {
                this.componenteDinamico = 'ComponentC'
                this.slide++;
            }
            else if (this.slide == 3) {
                this.componenteDinamico = 'ComponentD'
                this.slide++;
                this.button = false;
            }
            else if(this.slide == 4){
                alert("You are about to begin the TRAINING phase");
            }

        },
    },
    components: {
        ComponentA,
        ComponentB,
        ComponentC,
        ComponentD
    }
}
</script>

<style scoped>
.selectImage {
    margin-top: 150px;
}

.progressbar{
    text-align: center;
}
div.checkboxes {
    display: inline-flex;
}

div.originalImages {
    display: inline-block;
}

div.originalImages img {
    width: 230px;
    margin-right: 50px;
}
</style>