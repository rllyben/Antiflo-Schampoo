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
</style>