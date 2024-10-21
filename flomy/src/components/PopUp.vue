<template>
  <div class="popup-overlay" v-if="isVisible">
    <div class="popup">
      <slot></slot>
      <div class="flex-row popup-btn-group">
        <button class="secondary" @click="closePopup">Schließen</button>
        <button class="primary" @click="onActionButtonClick">Interesse?</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    onActionButtonClick() {
      this.$emit('action');
    }
  },
  name: 'PopUp'
};
</script>

<style>
.popup-overlay {
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  max-width: 80%;
  background: var(--elevated-background-color);
  padding: 20px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
}

@media (min-width:580px) {
  .popup {
    max-width: 600px;
  }
}

.popup-btn-group {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
  justify-content: space-evenly;
}
</style>