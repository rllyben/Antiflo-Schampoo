<template>
  <nav class="navbar sticky-top">
    <a class="navbar-brand mainpage" href="#" tabindex="0"
      >Meisterwerkstatt Müller</a
    >
    <router-link to="jobs">
      <div class="navbar-brand sidepage">Jobs</div>
    </router-link>
    <router-link to="/agr-verunreinigungen">
      <div class="navbar-brand sidepage">AGR Verunreinigungen</div>
    </router-link>
  </nav>
  <div class="bannercontainer">
      <!-- <img class="ecke" src="@/assets/eckenbanner.svg" /> -->
      <img class="banner" src="@/assets/banner.jpg" />
      <!-- <img class="logo" src="@/assets/logo.svg" /> -->
  </div>
  <router-view/>
  <footer>
      <router-link to="/impressum">
        <div class="container impressum">Impressum</div>
      </router-link>
      <router-link to="/privacy">
        <div class="container privacy">Datenschutz</div>
      </router-link>
    </footer>
</template>

<style>
nav {
  background-color: #2d2d2d;
}
.bannercontainer {
  position: relative;
  overflow: hidden;
}
.bannercontainer img {
  grid-area: overlay;
}
.banner {
  width: 100%;
  object-fit: cover;
  margin-top: -5px;
}
.logo {
  bottom: 0;
  right: 5%;
  z-index: 2;
  position: absolute;
  width: 23%;
}
.ecke {
  bottom: -1px;
  width: 100%;
  position: absolute;
  z-index: 1;
}

@media (min-width:580px){
  .blop {
    border: solid 1px var(--main-text-color);
  }
}


footer {
  margin-top: 5 rem;
  margin-bottom: 1rem;
}
</style>