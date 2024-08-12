<template>
  <div class="popup-overlay" v-if="isVisible">
    <div class="popup">
      <slot></slot>
      <button class="close-btn" @click="closePopup">Close</button>
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
  background: #282828;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-btn {
  margin-top: 20px;
  cursor: pointer;
  color: #282828;
  background: var(--main-text-color);
  border: 4px solid var(--main-text-color);
  border-radius: 0.4rem;
}

.close-btn:hover {
  background: #ffc678;
  border: 4px solid #ffc678;
}
</style>