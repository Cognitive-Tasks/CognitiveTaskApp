<template>

    For instance, the object below labelled <strong>ROTATED IMAGE</strong> is a correct rotation of the object <br>
    labelled <strong>ORIGINAL IMAGE</strong>
    because it matches the original image if it were rotated <br><br>
    <div class="exampleImages">
        <div class="originalImages"><strong>ORIGINAL IMAGE</strong><br>
            <img class="img" :src="url0" alt="example image">
        </div>
        <div class="originalImages"><strong>ROTATED IMAGE</strong><br>
            <img class="img" :src="url1" alt="example image">
        </div>
    </div><br>
    <strong>ROTATED IMAGE</strong> corresponds to <strong>ORIGINAL IMAGE</strong> rotated clockwise on the
    z-axis.<br><br>
</template>

<script>
export default {
    data() {
        return {
                url0: '../Esterne/stimuli/2/2_original.jpg',
                url1: '../Esterne/stimuli/2/correct/2_50.jpg',

            }
        }
    }
</script>