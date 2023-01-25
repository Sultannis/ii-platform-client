<script setup lang="ts">
const emit = defineEmits(["closeClick"]);

const emitCloseClick = () => {
  emit("closeClick");
};

const handleClick = () => {
  emitCloseClick();
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
  <div class="modal__background" @click.self="handleClick">
    <div
      :style="{
        width: width + 'px',
        height: height + 'px',
      }"
      class="modal"
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
  background: var(--background-color);
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
