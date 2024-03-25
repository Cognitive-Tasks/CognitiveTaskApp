<template>
    <div id="container">
        <div id="titoloTest">3D MENTAL ROTATION TASK</div>
        <form @submit.prevent="handleSubmit">
            <label>Insert your ID</label>
            <br>
            <input type="number" :min="numeroMin" v-model="id" required>
            <br>
            <br>
            <button type="submit" class="btn btn-primary btn-lg">START</button>
        </form>
        <div v-html="contenuto"></div>
    </div>



</template>

<script>
export default {
    data() {
        return {
            numeroMin: 1,
            id: '',
            contenuto: '',

        };
    },
    methods: {
        handleSubmit() {
            this.$router.push({ name: 'pre_training' });
        },

    }
}
</script>

<style>
#container {
    margin: 0 auto;
    width: 100%;
    text-align: center;
}

#titoloTest {
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 35px;
    color: black;
    margin-top: 25px;
}
</style>