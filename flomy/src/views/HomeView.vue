<template>
 <!-- <div id="app">
    <JobPopUp></JobPopUp>
  </div>  -->
  <div class="main">
    <div class="container blop">
      <div class="halt">
        <h1>Unser Service</h1>
      </div>
      <div class="row">
        <div class="custom-row boxcenter">
          <div class="service-title" @click="toggleImageScroll" :class="{ 'hover-active': !imagesScrolled.has('Wohnmobile') }">
            <h3>Wohnmobile</h3>
            <div class="service-content">
              <img class="picservice" src="@/assets/Camper.jpg" />
              <ul>
                <li>Ersatzteile</li>
                <li>Einrichtung</li>
                <li>
                  <a href="https://katalog.movera.com/ePaper_MOVERA-Katalog-2023_EUR/#1" target="_blank">Camping Zubehör</a>
                </li>
                <li>
                  <a href="https://www.reimo.com/ausbau-shop/" target="_blank">Camper & Wohnmobil Ausbau</a>
                </li>
                <li>HU / AU</li>
                <li>Gasprüfung</li>
                <li>Inspektion</li>
                <li>Reparatur</li>
                <li>Wartung</li>
              </ul>
            </div>
          </div>
          <div class="service-title" @click="toggleImageScroll" :class="{ 'hover-active': !imagesScrolled.has('Kraftfahrzeuge') }">
            <h3>Kraftfahrzeuge</h3>
            <div class="service-content">
              <img class="picservice" src="@/assets/KFZ.jpg" />
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
          </div>
          <div class="service-title" @click="toggleImageScroll" :class="{ 'hover-active': !imagesScrolled.has('E-Autos') }">
            <h3>E-Autos</h3>
            <div class="service-content">
              <img class="picservice" src="@/assets/eCar.jpg" />
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
          </div>
          <div class="service-title" @click="toggleImageScroll" :class="{ 'hover-active': !imagesScrolled.has('Reifen') }">
            <h3>Reifen</h3>
            <div class="service-content">
              <img class="picservice" src="@/assets/Reifen.jpg" />
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
    </div>
    <div class="container blop">
      <div class="col">
        <div class="halt">
          <h1>Über uns</h1>
        </div>
        <div class="row halt">
          <p>
            Privat, Persönlich und im direkten Kontakt mit Ihrem KFZ-Meister: Wir unterstützen Sie mit allen Anliegen rund ums Auto! Ob Räderwechsel, Achsvermessung, Klimaservice oder Zahnriemenwechsel; ob Mini, VW oder Audi; ob 3 oder 8,5 Tonnen.
            <br />
            <br />
            Und Ihr Wohnmobil? Wissen Sie schon, wo Sie Ihre Ersatzteile herbekommen? Wir unterstützen Sie gerne mit Rat, Tat, Expertenwissen und Herz, denn wir restaurieren gerade selbst unser privates Wohnmobil.
            <br />
            <br />
            Sie finden uns in Taunusstein-Wehen direkt hinter der Star-Tankstelle!
          </p>
        </div>
        <div class="row contact-about">
          <div class="col">
            Mail: info@kfz-mwm.de<br />
            Tel.: 06128 84322
          </div>
          <div class="col">
            Montag bis Freitag <br />
            09:00 - 13:00 Uhr <br />
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
  </div>
<!--    <div class="container">
      <div class="row">
        <div class="col flexbox">
          <router-link to="/contact" class="kontaktformular">  
              <div class="container contact"><h4>Kontaktformular</h4></div>
          </router-link>
        </div>
      </div>
    </div> -->
</template>

<script>
/* import JobPopUp from '@/components/JobPopUp.vue'; */
export default {
  /* components: {
    JobPopUp
  }, */
  data() {
    return {
      imagesScrolled: new Set()
    };
  },
  methods: {
    toggleImageScroll(event) {
      const image = event.currentTarget.querySelector('.picservice');
      const serviceType = event.currentTarget.querySelector('h3').innerText;
      if (image) {
        if (this.imagesScrolled.has(serviceType)) {
          image.style.top = '';
          this.imagesScrolled.delete(serviceType);
        } else {
          image.style.top = '100%';
          this.imagesScrolled.add(serviceType);
        }
      }
    }
  }
};
</script>

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
.service-title {
  min-width: 360px;
  max-width: 720px;
  text-align: center;
  flex: 1 0 0%;
}
.service-content {
  color: var(--main-text-color);
  padding: 40px;
  text-align: center;
  min-height: 348px;
  position: relative;
  overflow: hidden;
  background-color: var(--elevated-background-color);
  border: 1px solid;
}
.service ul {
  margin-top: 1rem;
}
li a {
  text-decoration: underline;
}
.picservice {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  transition: top 3s;
}
.service-title.hover-active:hover .picservice {
  top: 100%;
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
