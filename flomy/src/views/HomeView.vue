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
        <div class="row contact-about">
          <div class="col">
              Tel. 06128 84322 <br />
              Mail: info@kfz-mwm.de
          </div>
          <div class="col">
              Mo: 08:00 - 13:00 Uhr <br />
              Fr: 14:00 - 18:00 Uhr
          </div>
          <div class="col">
              Sa: geschlossen <br />
              So: geschlossen
          </div>
          <div class="col">
              Obere Waldstraße 9 <br />
              65232 Taunusstein <br />
              Deutschland
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
<!--         <div class="background">
          <img class="fragment" src="@/assets/footer.svg" />
        </div> -->
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
    <!-- <div class="container">
      <div class="row">
        <div class="col flexbox">
          <button type="button" class="kontaktformular">
            <h4>Kontaktformular</h4>
          </button>
        </div>
      </div>
    </div> -->
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
.right {
  text-align: right;
}
.left {
  text-align: left;
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
  margin-top: 5
  rem;
  margin-bottom: 1rem;
}
.background {
  position: relative;
}
/* .fragment {
  z-index: -1;
  position: absolute;
  width: 100vw;
  transform: translateX(-51%);
  margin-left: calc(50%);
} */
.contact-about {
  gap: 2rem 0;
  text-align: center;
}
.contact-about > .col {
  min-width: 194px;
}
</style>