<template>
  <div class="modal__back">
    <div class="modal">
      <i class="bx bx-x modal__exit" />
    </div>
  </div>
</template>

<style>
.modal__back {
  position: fixed;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  z-index: 3;
  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.608);
}

.modal {
  margin: 10vh auto;
  height: 200vh;
  width: 70%;
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
