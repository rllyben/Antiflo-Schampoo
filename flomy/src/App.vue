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
  height: 90vh;
  position: relative;
  overflow: hidden;
}
.bannercontainer img {
  grid-area: overlay;
}
.banner {
  width: 100%;
  object-fit: cover;
}
.logo {
  bottom: 0;
  right: 5%;
  z-index: 2;
  position: absolute;
  width: 23%;
}
.ecke {
  bottom: 0;
  width: 100%;
  position: absolute;
  z-index: 1;
}
@media (max-width:1270px){
  .bannercontainer {
  height: 75vh;
  }
}
@media (max-width:1100px){
  .bannercontainer {
  height: 60vh;
  }
}
@media (max-width:920px){
  .bannercontainer {
  height: 50vh;
  }
}
@media (max-width:770px){
  .bannercontainer {
  height: 45vh;
  }
}
@media (max-width:670px){
  .bannercontainer {
  height: 40vh;
  }
}
@media (max-width:600px){
  .bannercontainer {
  height: 35vh;
  }
}
@media (max-width:530px){
  .bannercontainer {
  height: 30vh;
  }
}
@media (max-width:450px){
  .bannercontainer {
  height: 27vh;
  }
}
@media (max-width:370px){
  .bannercontainer {
  height: 25vh;
  }
}
@media (max-width:345px){
  .bannercontainer {
  height: 23vh;
  }
}
@media (max-width:300px){
  .bannercontainer {
  height: 21vh;
  }
}
@media (max-width:280px){
  .bannercontainer {
  height: 18vh;
  }
}
@media (max-width:250px){
  .bannercontainer {
  height: 15vh;
  }
}
</style>