<template>
  <div class="main">
    <div class="container blop">
      <div class="row">
        <div class="halt">
          <h1>About Us</h1>
        </div>
        <div class="row halt">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div class="row">
          <div class="col">
            <p1 class="left">
              Tel. 06128 84322 <br />
              Mail: info@kfz-mwm.de
            </p1>
          </div>
          <div class="col">
            <p1>
              Mo: 08:00 - 13:00 Uhr <br />
              Fr: 14:00 - 18:00 Uhr
            </p1>
          </div>
          <div class="col">
            <p1>
              Sa: geschlossen <br />
              So: geschlossen
            </p1>
          </div>
          <div class="col">
            <p class="right">
              Obere Waldstraße 9 <br />
              65232 Taunusstein <br />
              Deutschland
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container blop">
      <div class="halt">
        <h1>Unser Service</h1>
      </div>
      <div class="row">
        <div class="row halt">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div class="background">
          <img class="fragment" src="@/assets/footer.svg" />
        </div>
        <div class="custom-row">
          <div class="col service camper">
            <h3>Wohnmobile</h3>
          </div>
          <div class="col service car">
            <h3>Kraftfahrzeuge</h3>
          </div>
          <div class="col service e-car">
            <h3>E-Autos</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col flexbox">
          <button type="button" class="kontaktformular">
            <h4>Kontaktformular</h4>
          </button>
        </div>
      </div>
    </div>
    <footer>
      <router-link to="/impressum">    
        <div class="container impressum">Impressum</div>
      </router-link>
    </footer>
  </div>
</template>


<style>
.main {
  position: relative;
}
.bannercontainer {
  display: grid;
  grid-template-areas: "overlay";
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
  margin-right: 5%;
  width: 20%;
}
.ecke {
  width: 100%;
  height: 80vh;
  z-index: 1;
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
  text-align: center;
}
.camper {
  background-color: #585979;
}
.car {
  background-color: #517350;
}
.e-car {
  background-color: #6d5151;
}
.flexbox {
  display: flex;
}
.kontaktformular {
  background-color: #2d2d2d;
  color: var(--main-text-color);
  height: 65px;
  width: 280px;
  margin: auto;
}
.kontaktformular:hover {
  color: #ffc678;
}
footer {
  margin-top: 10rem;
}
.background {
  position: relative;
}
.fragment {
  z-index: -1;
  position: absolute;
  width: 100vw;
  transform: translateX(-51%);
  margin-left: calc(50%);
}
</style>