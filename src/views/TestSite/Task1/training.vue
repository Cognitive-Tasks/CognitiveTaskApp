<template>
    <div class="progressbar">
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100">
            <div class="progress-bar" :style="{ width: progress + '%' }"> {{ progress }} %</div>
        </div>
    </div>
    <div id="TimeBar">
        <div id="dom">
            <h2 style="margin-left: 30px;">Domanda {{ domanda }}/4</h2>
        </div>
        <div id="time">
            <h2 style="float: right; margin-right: 30px;">Tempo Trascorso {{ tempo }}</h2>
        </div>
    </div>

    <div class="selectImage">
        <div class="cont">
            <p><strong>Which object correspond to a possible rotation of the original image?</strong></p>
            <br>
            <p><strong>SELECT TWO OBJECTS</strong> (click on the image to select/deselect the object)</p>
            <br>
            <div class="originalImage"><strong>ORIGINAL IMAGE</strong>
                <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off">
                <label for="btn-check"><img class="img" :src="urlOriginal" alt="Immagine"></label>
            </div>
            <div class="select">
                <input type="checkbox" class="btn-check" id="btn-check1" autocomplete="off" v-model="checkboxes[0]"
                    @change="menageOption(0)">
                <label for="btn-check1" class="checkbox-label"><img class="img" :src="image[0].url"
                        alt="Immagine"></label>
                <input type="checkbox" class="btn-check" id="btn-check2" autocomplete="off" v-model="checkboxes[1]"
                    @change="menageOption(1)">
                <label for="btn-check2" class="checkbox-label"><img class="img" :src="image[1].url"
                        alt="Immagine"></label>
                <input type="checkbox" class="btn-check" id="btn-check3" autocomplete="off" v-model="checkboxes[2]"
                    @change="menageOption(2)">
                <label for="btn-check3" class="checkbox-label"><img class="img" :src="image[2].url"
                        alt="Immagine"></label>
                <input type="checkbox" class="btn-check" id="btn-check4" autocomplete="off" v-model="checkboxes[3]"
                    @change="menageOption(3)">
                <label for="btn-check4" class="checkbox-label"><img class="img" :src="image[3].url"
                        alt="Immagine"></label>
            </div>

            <button class="btn btn-primary btn-lg" v-if="button" @click="fun">NEXT</button>
            <RouterLink to="/test/test">
                <button class="btn btn-primary btn-lg" v-if="!button" @click="fun">GO TO TEST</button>
            </RouterLink>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            button: true,
            domanda: 0,
            score: 0,
            urlOriginal: '',
            image: [
                { url: '', value: '' },
                { url: '', value: '' },
                { url: '', value: '' },
                { url: '', value: '' },
            ],
            tested: [],
            numeroCasuale: 1,
            correctIndexes: ['50', '100', '150'],
            incorrectIndexes: ['0', '50', '100', '150'],
            correctIndexesSelected: [],
            incorrectIndexesSelected: [],
            progress: 0,
            tempoTrascorso: 0,
            intervalloCronometro: null,
            checkboxes: [false, false, false, false],
            checkboxesSelezionati: [],

        }
    },
    mounted() {
        this.fun();

    },
    created() {
        this.avviaCronometro();
    },
    computed: {
        tempo: function () {
            var minuti = Math.floor(this.tempoTrascorso / 60);
            var secondi = this.tempoTrascorso % 60;
            return `${minuti < 10 ? '0' + minuti : minuti}:${secondi < 10 ? '0' + secondi : secondi}`;

        }
    },
    methods: {
        menageOption(index) {
            var limit = 2
            var checkboxesSelezionati = [];
            for (let i = 0; i < this.checkboxes.length; i++) {
                if (this.checkboxes[i]) {
                    checkboxesSelezionati.push(i + 1); // Aggiunge l'indice + 1 all'array dei checkbox selezionati
                }
            }
            if (checkboxesSelezionati.length > limit) {
                this.checkboxes[index] = false;
                alert("Select only two options")
            }
        },
        menageEndTrial() {
            var score = 0
            var checkboxesSelezionati = [];
            if (this.domanda == 0) return true;
            for (let i = 0; i < this.checkboxes.length; i++) {
                if (this.checkboxes[i]) {
                    checkboxesSelezionati.push(i + 1); // Aggiunge l'indice + 1 all'array dei checkbox selezionati
                    if (this.image[i].value == "correct") {
                        score++
                    }
                }
            }
            if (checkboxesSelezionati.length < 2) {
                alert("Please, select two options before going on!")
                return false;
            } else {
                this.score += score;
                return true;
            }
        },
        fun() {
            if (this.menageEndTrial()){
                if (this.domanda < 4) {
                    this.numeroCasuale = this.generaNumeroCasuale(1, 48);
                    var correct1Index = this.getCorrectIndex();
                    var correct2Index = this.getCorrectIndex();
                    var incorrect3Index = this.getIncorrectIndex();
                    var incorrect4Index = this.getIncorrectIndex();
                    this.correctIndexesSelected = [];
                    this.incorrectIndexesSelected = [];
                    this.checkboxes = [false, false, false, false];
                    this.checkboxesSelezionati = [];
                    this.urlOriginal = "../Esterne/stimuli/" + this.numeroCasuale + "/" + this.numeroCasuale + "_original.jpg";
                    this.image[0].url = "../Esterne/stimuli/" + this.numeroCasuale + "/correct/" + this.numeroCasuale + "_" + correct1Index + ".jpg";
                    this.image[0].value = 'correct';
                    this.image[1].url = "../Esterne/stimuli/" + this.numeroCasuale + "/correct/" + this.numeroCasuale + "_" + correct2Index + ".jpg";
                    this.image[1].value = 'correct';
                    this.image[2].url = "../Esterne/stimuli/" + this.numeroCasuale + "/incorrect/" + this.numeroCasuale + "_" + incorrect3Index + "_R.jpg";
                    this.image[2].value = 'incorrect';
                    this.image[3].url = "../Esterne/stimuli/" + this.numeroCasuale + "/incorrect/" + this.numeroCasuale + "_" + incorrect4Index + "_R.jpg";
                    this.image[3].value = 'incorrect';

                    //oridnamento casuale dell'array contenente gli stimuli
                    this.image.sort(() => Math.random() - 0.5);

                    /*
                    console.log(randomArray.length);
                    for (let i = 0; i < randomArray.length -1; i++) {
                        const j = Math.floor(Math.random() * (i + 1));
                        console.log("random");
                        console.log(j);
    
                        [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
                    }
                    console.log(randomArray.length);
                    */

                    this.progress += 25;
                    this.domanda++;
                    if (this.domanda == 4) this.button = !this.button;
                }
                else if (this.domanda == 4) {//Inizia il test
                    var ris = (this.score * 100) / 8;
                    alert("Risultato : " + ris + "%");
                    alert(`From here onward, you will perform a test with 20 sample tasks.
Note that you will no longer receive any feedback or suggestion during the test.
Click on the GO TO TEST button to go to the test.`);
                }
            }
        },
        generaNumeroCasuale(min, max) {

            var number;
            do {
                number = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (this.tested.includes(number));
            this.tested.push(number);

            return number;
        },
        getCorrectIndex() {
            var index
            do {
                index = this.correctIndexes[Math.floor(Math.random() * this.correctIndexes.length)];
            } while (this.correctIndexesSelected.includes(index));
            this.correctIndexesSelected.push(index)
            return index
        },

        getIncorrectIndex() {
            var index
            do {
                index = this.incorrectIndexes[Math.floor(Math.random() * this.incorrectIndexes.length)];
            } while (this.incorrectIndexesSelected.includes(index));
            this.incorrectIndexesSelected.push(index)
            return index
        },
        avviaCronometro() {
            this.intervalloCronometro = setInterval(() => {
                this.tempoTrascorso++;
            }, 1000);
        },
    }

}
</script>

<style>
.progressbar {
    background-color: #2d75e2;
    height: 100px;
    width: 100%;
}

.progress {
    background-color: #D2D2D2;
    position: relative;
    top: 50%;
    margin: -16px 50px 0 50px;
}

.progress-bar {
    background-color: white;
}

#TimeBar {
    background-color: white;
    width: 70%;
    height: 50px;
    margin: 50px auto;
    border-radius: 15px;
}

.cont {
    margin: auto;
}

#dom {
    position: relative;
    display: inline-block;
    width: 50%;
}

#time {
    position: relative;
    width: 50%;
    float: right;
}

.selectImage {
    margin: 20px auto;
    background-color: white;
    border-radius: 15px;
    height: 70%;
    width: 90%;
    text-align: center;
    display: flex;
    justify-content: center;
    /* Centra orizzontalmente */
    align-items: center;
    /* Centra verticalmente */
}

.originalImage {
    margin: auto;
    width: 230px;
    height: auto;
    border: 1px solid;
    border-radius: 10px;

}

.select {
    height: auto;
    width: 922px;
    margin: 20px auto;
    border: 1px solid;
    border-radius: 10px;
}

.img {
    width: 230px;
    height: 230px;
    padding: 10px
}



/* Stile dell'etichetta del checkbox */
.checkbox-label {
    cursor: pointer;
    /* Cambia il cursore al passaggio del mouse */
}

/* Stile del checkbox selezionato */
.btn-check:checked+.checkbox-label {
    border-radius: 10px;
    background-color: #007bff;
    /* Cambia il colore di sfondo del label quando il checkbox è selezionato */
    color: #fff;
    /* Cambia il colore del testo quando il checkbox è selezionato */
    transition: background-color 0.5s ease;
    /* Aggiunge una transizione fluida al cambiamento di colore di sfondo */
}
</style>