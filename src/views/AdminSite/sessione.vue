<template>
    <admin-header :sel="3"></admin-header>
    <div class="faceAdmin">
        <div class="contenitor">
            <h3>Nuova sessione</h3>
            <form class="contenitor2">
                <div class="contenitor3">
                    <label class="form-label">Nome Test : </label>
                    <input required type="text" class="form-control">

                    <label class="form-label" style="padding-top: 10px ;">Data : </label><br>
                    <input required type="date" class="form-control"><br>
                    <label for="formFile" class="form-label">File .csv con le email : </label>
                    <input required class="form-control" type="file" id="formFile"><br>

                    <label for="formFile" class="form-label">Test : </label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>-</option>
                        <option value="1">Task1</option>
                        <option value="2">Task2</option>
                        <option value="3">task3</option>
                    </select>
                </div>
                <button id="btnCrea" v-on:click="avanzamento_progressbar" type="submit"
                    class="btn btn-primary">CREA</button>
            </form>
            <div class="progress" style="position: relative; bottom: 0px; right: 0px; left: 0px;">
                <div id="progressbar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p id="msg">{{ msg }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            i: 0,
            width: 0,
            msg: '',
        }
    },
    methods: {
        avanzamento_progressbar() {
            if (this.i == 0) {
                this.i = 1;
                this.width = 0;
                var elem = document.getElementById("progressbar");
                elem.style.width = this.width;
                for (var i = 0; i <= 100; i++) {
                    if (this.width >= 100) {
                        this.i = 0;
                    } else {
                        this.width++;
                        elem.style.width = this.width + "%";
                    }
                }



            }
        }
    },
    mounted: function () {

    },
    watch: {
        width: function (value) {
            if (value >= 100) {
                this.msg = 'Completato!';
            }
        }
    }
}
</script>