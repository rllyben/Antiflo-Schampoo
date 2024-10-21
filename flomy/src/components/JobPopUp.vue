<template>
    <Popup :isVisible="localShowPopUp" @close="closePopup()" @action="handleActionBtnClick()">
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
import { jobPopUpStore } from '../state/JobPopupState.js'

export default {
  components: {
    Popup
  },
  data() {
    return {
      localShowPopUp: true,
      jobPopUpStore,
    };
  },
  mounted() {
    this.localShowPopUp = this.jobPopUpStore.showPopUp;
    this.jobPopUpStore.showPopUp = false;
  },
  methods: {
    closePopup() {
      this.localShowPopUp = false
    },
    handleActionBtnClick() {
      this.$router.push('/jobs');
    }
  },
  name: 'JobPopUp'
};
</script>