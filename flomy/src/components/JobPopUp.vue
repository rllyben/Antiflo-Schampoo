<template>
    <Popup :isVisible="showPopup" @close="showPopup = false">
      <h2>Job gesucht?</h2>
      <p>Wir suchen einen <b>Kfz-Mechatroniker (m/w/d)</b></p>
      <p>
        Bewirb dich unkompliziert: Telefonisch, per Mail - oder einfach mal vorbei kommen.
      </p>
      <p>Wir freuen uns auf dich!</p>
    </Popup>
</template>

<script>
import Popup from '../components/PopUp.vue';
export default {
  components: {
    Popup
  },
  data() {
    return {
      showPopup: false,
    };
  },
  mounted() {
    this.showPopup = true;
  },
  name: 'JobPopUp'
};
</script>