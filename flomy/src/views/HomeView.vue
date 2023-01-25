<template>
    <div class="main">
    <nav class="navbar fixed-top">
      <a class="navbar-brand name" href="#">Meisterwerkstatt Müller</a>
    </nav>
    <div class="bannercontainer">
      <img class="ecke" src="@/assets/eckenbanner.svg">
      <img class="banner" src="@/assets/engine.jpg">
    </div>
    <div class="container blop">
      <div class="row">
        <div class="halt">
          <h1> About Us </h1>
        </div>
      <div class="row halt">
        <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div class="row">
        <div class="col">
          <p1 class="left">  Tel. 06128 84322 <br>
                Mail: info@kfz-mwm.de </p1>
        </div>
        <div class="col">
          <p1>  Mo: 08:00 - 13:00 Uhr <br>
               Fr:  14:00 - 18:00 Uhr </p1>
        </div>
        <div class="col">
          <p1>   Sa:  geschlossen <br>
                So: geschlossen </p1>
        </div>
        <div class="col">
          <p class="right">  Obere Waldstraße 9 <br>
                65232 Taunusstein <br>
                Deutschland </p>
        </div>
      </div>
      </div>
    </div>
    <div class="container blop">
      <div class="halt">
        <h1> Unser Service </h1>
      </div>
      <div class="row">
        <div class="row halt">
          <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <!-- <div class="background">
          <img class="banner" src="bilder/footer.svg">
        </div> -->
        <div class="row">
          <div class="col service camper" style="text-align: center">
            <h3> Wohnmobile </h3>
          </div>
          <div class="col service car" style="text-align: center">
            <h3> Kraftfahrzeuge </h3>
          </div>
          <div class="col service e-car" style="text-align: center">
            <h3> E-Autos </h3>
          </div>
        </div>
      </div>
      </div>
    <div class="container">
      <div class="row">
        <div class="col flexbox">
          <button type="button" class="kontaktformular"> <h4>Kontaktformular</h4></button>
        </div>
      </div>
    </div>
    <footer>
      <div class="container impressum">
          Impressum
      </div>
    </footer>
  </div>
</template>


<style>
:root {
  --main-text-color: #F4981A;
}
body {
  background-color: #2D2D2D;
  color: var(--main-text-color);
}
.main{
  position: relative;
}
nav {
  background-color: #2D2D2D;
}
a {
  color: var(--main-text-color);
}
h1 {
  width: fit-content;
  text-align: center;
  padding: 0 3rem;
  margin-top: -5rem;
  background-color: #2D2D2D;
}
p {
  text-align: center;
}
.name {
  padding-left: 50px;
}
.name:hover {
  color: #FFC678;
}
.bannercontainer{
  display: grid;
  grid-template-areas: 'overlay';
}
.bannercontainer img {
  grid-area: overlay;
}
.banner {
  width: 100vw;
  height: 80vh;
  position: relative;
  object-fit: cover;
}
.ecke {
  width: 100%;
  height: 80vh;
  z-index: 5;
}
.right {
  text-align: right;
}
.left {
  text-align: left;
}
.blop {
  margin: 6rem auto;
  padding: 50px;
  border: solid 1px var(--main-text-color);
}
.halt {
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}
hr {
  margin: 30px;
}
.service {
  color: var(--main-text-color);
  padding: 40px;
  padding-bottom: 25vmax;
  margin: 1.5rem;
}
.camper {
  background-color: #585979;
}
.car {
  background-color: #517350;
}
.e-car {
  background-color: #6D5151;
}
.flexbox {
  display: flex;
}
.kontaktformular {
  background-color: #2D2D2D;
  color: var(--main-text-color);
  height: 65px;
  width: 280px;
  margin: auto;
}
footer {
  margin: 3rem auto;
}
/* .background {
  background-image: url(bilder/footer.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  position: absolute;
  max-height: 0px;
  z-index: -1;
  margin-left: -16%;
} */
</style>