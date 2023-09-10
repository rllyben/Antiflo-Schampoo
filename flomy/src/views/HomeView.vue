<template>
  <div class="main">
    <div class="container blop">
      <div class="halt">
        <h1>Unser Service</h1>
      </div>
      <div class="row">
<!--         <div class="background">
          <img class="fragment" src="@/assets/footer.svg" />
        </div> -->
        <div class="custom-row boxcenter">
            <div class="col service camper">
             <h3>Wohnmobile</h3>
              <ul>
               <li>Ersatzteile</li>
                <li>Einrichtung</li>
                <li><a href=" https://katalog.movera.com/ePaper_MOVERA-Katalog-2023_EUR/#1" target="_blank">Camping Zubehör</a></li>
                <li><a href="https://www.reimo.com/ausbau-shop/" target="_blank">Camper & Wohnmobil Ausbau</a></li>
                <li>HU / AU</li>
                <li>Gasprüfung</li>
                <li>Inspektion</li>
                <li>Reparatur</li>
                <li>Wartung</li>
              </ul>
            </div>
            <div class="col service car">
              <h3>Kraftfahrzeuge</h3>
              <ul>
                <li>Reparaturen</li>
                <li>Achsvermessung</li>
                <li>Lichteinstellung</li>
                <li>Klimaservice</li>
                <li>HU / AU</li>
                <li>Fehlersuche</li>
                <li>Wartungsarbeiten nach Herstellervorgaben</li>
              </ul>
            </div>
           <div class="col service e-car">
            <h3>E-Autos</h3>
            <ul>
              <li>Reparaturen</li>
              <li>Achsvermessung</li>
              <li>Lichteinstellung</li>
              <li>Klimaservice</li>
              <li>HU</li>
              <li>Fehlersuche</li>
              <li>Wartungsarbeiten nach Herstellervorgaben</li>
            </ul>
           </div>
           <div class="col service e-car">
            <h3>Reifen</h3>
            <ul>
              <li>Einlagern</li>
              <li>Wechseln</li>
              <li>Montieren</li>
              <li>Entsorgen</li>
              <li>Wuchten</li>
              <li>Waschen</li>
              <li>Verkaufen</li>
            </ul>
           </div>
          </div>
      </div>
    </div>
    <div class="container blop">
      <div class="col">
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
              Mail: info@kfz-mwm.de<br />
              Tel.: 06128 84322
          </div>
          <div class="col">
              Montag bis Freitag <br />
              08:00 - 13:00 Uhr <br />
              14:00 - 18:00 Uhr
          </div>
          <div class="col">
              Obere Waldstraße 9 <br />
              65232 Taunusstein <br />
              Deutschland
          </div>
        </div>
      </div>
    </div>
<!--     <div class="container">
      <div class="row">
        <div class="col flexbox">
          <router-link to="/contact" class="kontaktformular">  
              <div class="container contact"><h4>Kontaktformular</h4></div>
          </router-link>
        </div>
      </div>
    </div> -->
    <footer>
      <router-link to="/impressum">    
        <div class="container impressum">Impressum</div>
      </router-link>
      <router-link to="/privacy">    
        <div class="container privacy">Datenschutz</div>
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
.boxcenter { 
  justify-content: center;
}
.service {
  color: var(--main-text-color);
  padding: 40px;
  text-align: center;
  min-width: 360px;
  max-width: 720px;
}
.service ul {
  margin-top: 1rem;
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
  border: 1px solid var(--main-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 0 7% !important;
}
.contact-about > .col {
  min-width: 194px;
}
</style>