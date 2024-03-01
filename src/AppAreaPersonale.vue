<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="toolBar">
    <h3 style="position: fixed; top: 10px; left: 10px; float: left;">Working span test</h3>
    <div id="prof" class="dropdown" style="float:right;">
      <button class="dropbtn">
        <svg xmlns="http://www.w3.org/2000/svg"
          style="width: 30px; height: 30px; margin-top: 5px;  color: black;" fill="currentColor"
          class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg></button>
      <div class="dropdown-content">
        <RouterLink to="/profilo" v-on:click="selezionato = 2" :style="styleCSS(2)">Profilo</RouterLink>
        <a href="/login">Logout</a>
      </div>
    </div>
  </div>
  <div id="menu" class="d-flex align-items-start">
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <RouterLink id="btnMenu" to="/" class="nav-link active" v-on:click="selezionato = 1" :style="styleCSS(1)">Home
      </RouterLink>
      <RouterLink id="btnMenu" to="/sessione" class="nav-link active" v-on:click="selezionato = 3" :style="styleCSS(3)">Crea
        sessione</RouterLink>
      <RouterLink id="btnMenu" to="/risultati" class="nav-link active" v-on:click="selezionato = 4" :style="styleCSS(4)">Analizza i
        risultati</RouterLink>
      <RouterLink id="btnMenu" to="/sessioniInCorso" class="nav-link active" v-on:click="selezionato = 5" :style="styleCSS(5)">Sessioni
        in corso</RouterLink>
    </div>
  </div>
  <div id="routerview">
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {

  data() {
    return {
      selezionato: 1,

    }
  },
  methods: {
    styleCSS(sel) {
      if (sel == this.selezionato) {
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

