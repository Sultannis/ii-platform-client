<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["closeClick"]);

const emitCloseClick = () => {
  emit("closeClick");
};

const handleClick = () => {
  if (!mouseOverModal.value) {
    emitCloseClick();
  }
};

const mouseOverModal = ref(false);

const setMouseOver = () => {
  mouseOverModal.value = true;
};

const setMouseOut = () => {
  mouseOverModal.value = false;
};

defineProps({
  width: {
    type: String,
    default: "800",
  },
  height: {
    type: String,
    default: "600",
  },
});
</script>

<template>
  <div class="modal__background" @click="handleClick">
    <div
      :style="{
        width: width + 'px',
        height: height + 'px',
      }"
      class="modal"
      @mouseenter="setMouseOver"
      @mouseleave="setMouseOut"
    >
      <i class="bx bx-x modal__exit" @click="emitCloseClick" />
      <slot />
    </div>
  </div>
</template>

<style>
.modal__background {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  z-index: 4;
  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.608);
}

.modal {
  margin: 5vh auto;
  background: #fff;
  border-radius: 10px;
  position: relative;
}

.modal__exit {
  color: #fff;
  position: absolute;
  top: -5px;
  right: -50px;
  font-size: 40px;
  cursor: pointer;
}
</style>
