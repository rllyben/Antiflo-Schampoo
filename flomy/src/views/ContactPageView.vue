<template>
  <div class="container blop">
      <div class="row">
        <div class="halt">
          <h1>Kontaktformular</h1>
          <div>
            <form>
              <fieldset>
                <div class="row">
                  <div>
                    <label>Anrede</label>
                    <select>
                      <option value="Herr">Herr</option>
                      <option value="Herr">Frau</option>
                      <option value="Herr">Divers</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div>
                    <label>Nachname</label>
                    <input value="">
                  </div>
                  <div>
                    <label>Vorname</label>
                    <input value="">
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <router-link to="/impressum">    
        <div class="container impressum">Impressum</div>
      </router-link>
      <router-link to="/privacy">    
        <div class="container privacy">Datenschutz</div>
      </router-link>
    </footer>
</template>

<style>
</style>

<script>
  export default {
    mounted () {
      window.scrollTo(0, 0)
    }
  }
</script>