<template>
    <div class="main">
    <nav class="navbar fixed-top">
      <a class="navbar-brand name" href="#" tabindex="0">Meisterwerkstatt Müller</a>
    </nav>
    <div class="bannercontainer">
      <img class="ecke" src="@/assets/eckenbanner.svg">
      <img class="banner" src="@/assets/engine.jpg">
      <img class="logo" src="@/assets/logo.svg">
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
          <img class="banner" src="@/assets/footer.svg">
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
.main{
  position: relative;
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
.logo {
  z-index: 2;
  place-self: end;
  margin-right: 4%;
}
.ecke {
  width: 100%;
  height: 80vh;
  z-index: 1;
}
nav {
  background-color: #2D2D2D;
}
.name {
  padding-left: 50px;
}
.name:hover {
  color: #FFC678;
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
  margin: 2rem;
}
.camper {
  background-color: #585979;
  margin-left: -1.5rem;
}
.car {
  background-color: #517350;
}
.e-car {
  background-color: #6D5151;
  margin-right: -3rem;
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
  background-repeat: no-repeat;
  background-position: bottom;
  position: relative;
  max-height: 0px;
  z-index: -1;
  margin-left: -16%;
} */
</style>