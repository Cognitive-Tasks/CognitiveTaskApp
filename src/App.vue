<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template style="background-image: url(../public/sfondo.avif)">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/" title="Home">WORKING SPAN TEST</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="About">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="Contatti">Contatti</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cognitive Task
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink class="dropdown-item" to="Task1">Task 1</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="Task2">Task 2</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="Task3">Task 3</RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item" id="areaPersonaleImg">
            <RouterLink to="Login">
              <svg xmlns="http://www.w3.org/2000/svg"
                style="width: 30px; height: 30px; margin-top: 5px; margin-right: 10px; color: black;" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <RouterView></RouterView>
  </div>

  <footer>
    <RouterLink id="textDown" title="Home" to="/" style="color: white;">WorkingSpanTest.com</RouterLink>
  </footer>
</template>
