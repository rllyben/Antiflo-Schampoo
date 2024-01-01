<template>
  <nav class="navbar fixed-top">
    <a class="navbar-brand name" href="#" tabindex="0"
      >Meisterwerkstatt Müller</a
    >
  </nav>
  <div class="bannercontainer">
      <img class="ecke" src="@/assets/eckenbanner.svg" />
      <img class="banner" src="@/assets/engine.jpg" />
      <img class="logo" src="@/assets/logo.svg" />
  </div>
  <router-view/>
</template>

<style>
nav {
  background-color: #2d2d2d;
}
.name {
  padding-left: 50px;
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
</style>