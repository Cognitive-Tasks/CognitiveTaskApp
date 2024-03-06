<template>
    <!--ToolBar-->
    <div id="toolBar">
        <!--Title-->
        <h3 style="position: fixed; top: 10px; left: 10px; float: left;">Working span test</h3>
        <!--Icon area personale-->
        <div id="imgProfilo" class="dropdown" style="float:right;">
            <button class="imgBtn">
                <svg xmlns="http://www.w3.org/2000/svg"
                    style="width: 30px; height: 30px; margin-top: 5px;  color: black;" fill="currentColor"
                    class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
            </button>
            <div class="dropdown-content">
                <RouterLink to="/admin/profilo" v-on:click="selezionato = 2" :style="styleCSS(2)">Profilo</RouterLink>
                <RouterLink to="/login">Logout</RouterLink>
            </div>
        </div>
    </div>
    <!--Menu-->
    <div id="menu" class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <RouterLink id="btnMenu" to="/admin/dashboard" class="nav-link active" :style="styleCSS(1)">
                Home
            </RouterLink>
            <RouterLink id="btnMenu" to="/admin/sessione" class="nav-link active" :style="styleCSS(3)">Crea
                sessione</RouterLink>
            <RouterLink id="btnMenu" to="/admin/risultati" class="nav-link active" :style="styleCSS(4)">Analizza i
                risultati</RouterLink>
            <RouterLink id="btnMenu" to="/admin/sessioniInCorso" class="nav-link active" :style="styleCSS(5)">Sessioni
                in corso</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    props: ['sel'],
    methods: {
        styleCSS(sel) {
            if (sel == this.sel) {
                return {
                    'color': '#FFFFFF',
                    'background-color': '#0d6efd',
                }
            }
            return '';
        },
    }

}
</script>