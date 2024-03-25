<template>
    Contrariwise, the object below labelled <strong>DIFFERENT IMAGE</strong> does not correspond to a rotation of
    the
    object <br>
    labelled <strong>ORIGINAL IMAGE</strong>
    because it doesn\'t match the original image if it were rotated <br><br>
    <div class="exampleImages">
        <div class="originalImages"><strong>ORIGINAL IMAGE</strong><br>
            <img class="img" :src="url0" alt="example image">
        </div>
        
        <div class="originalImages"><strong>DIFFERENT IMAGE</strong><br>
            <img class="img" :src="url1" alt="example image">
        </div>        
    </div><br>
</template>

<script>
export default {
    data() {
        return {
                url0: '../Esterne/stimuli/2/2_original.jpg',
                url1: '../Esterne/stimuli/2/incorrect/2_50_R.jpg',

            }
        }
    }
</script>