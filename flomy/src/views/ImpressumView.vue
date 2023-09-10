<template>
  <div class="container blop">
      <div class="row">
        <div class="halt">
          <h1>Impressum</h1>
        </div>
        <div class="row">
          <p>
            Peter Müller & Sohn OHG <br />
            Platterstraße 88 <br />
            65232 Taunusstein <br />
            <br />
            <span class="bold">Abteilung:</span> <br />
            Kfz Meister Werkstatt Müller (MWM)<br />
            Obere Waldstraße 9 <br />
            65232 Taunusstein 
          </p>
          <p>
            Handelsregister: HRA 783
          </p>
          <p>
            Registergericht: Amtsgericht Wiesbaden
          </p>
          <p>
            <span class="bold">Geschäftsführer:</span> <br />
            Hans-Peter Müller <br/>
            <br/>
          </p>
          <h4>Kontakt</h4>
          <p>
            Telefon: +49 (0) 6128 84322 <br />
            E-Mail: info@kfz-mwm.de
          </p>
          <h4>
            Umsatzsteuer-ID
          </h4>
          <p>
            Umsatzsteuer-ID: DE 113900879
          </p>
          <p>
            <br />
            <br />
            Inhaltlich Verantwortlicher gem §10 Abs. 3 MDStV: <br />
            Hans-Peter Müller
          </p>
        </div>
      </div>
    </div>
</template>

<style>
h4{
  text-align: center;
}
.bold{
  font-weight: 750;
}
</style>

<script>
  export default {
    mounted () {
      window.scrollTo(0, 0)
    }
  }
</script>