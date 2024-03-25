<template>


    <div id="p1">In this test, you will be shown five different 3D objects.<br>
        On the left side of the window, will be displayed a 3D object labelled <strong>ORIGINAL IMAGE</strong>.<br>
        On the right side of the window, next to the ORIGINAL IMAGE, you will be shown four different 3D
        objects.<br><br> <br>
        <div class="originalImages"><strong>ORIGINAL IMAGE</strong><br>
            <img class="img" :src="url0" alt="example image">
        </div>
        <div class="select">
            <input type="checkbox" class="btn-check" id="btn-check1">
            <label for="btn-check1" class="checkbox-label"><img class="img"
                    :src="url1" alt="Immagine"></label>


            <input type="checkbox" class="btn-check" id="btn-check2">
            <label for="btn-check2" class="checkbox-label"><img class="img"
                    :src="url2" alt="Immagine"></label>

            <input type="checkbox" class="btn-check" id="btn-check3">
            <label for="btn-check3" class="checkbox-label"><img class="img"
                    :src="url3" alt="Immagine"></label>

            <input type="checkbox" class="btn-check" id="btn-check4">
            <label for="btn-check4" class="checkbox-label"><img class="img"
                    :src="url4" alt="Immagine"></label>

        </div>
    </div>
    Two of these four objects correspond to a rotation of the original image in some axis.<br><br>
</template>

<script>
export default {
    data() {
        return {
                url0: '../Esterne/stimuli/17/17_original.jpg',
                url1: '../Esterne/stimuli/17/correct/17_50.jpg',
                url2: '../Esterne/stimuli/17/incorrect/17_100_R.jpg',
                url3: '../Esterne/stimuli/17/correct/17_150.jpg',
                url4: '../Esterne/stimuli/17/incorrect/17_0_R.jpg',

            }
        }
    }
</script>