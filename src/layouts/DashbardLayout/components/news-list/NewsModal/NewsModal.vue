<script setup lang="ts">
import {
  closeNewsModal,
  selectedNewsItem,
  newsModalVisible,
} from "@/layouts/DashbardLayout/components/news-list/composables/newsModalState";
import { ref } from "vue";

const mouseOnModal = ref(false);

const setMouseOverValue = () => {
  mouseOnModal.value = true;
  console.log(mouseOnModal.value);
};

const setMouseOutValue = () => {
  mouseOnModal.value = false;
  console.log(mouseOnModal.value);
};

const handleNewsModalClose = () => {
  if (!mouseOnModal.value) {
    closeNewsModal();
  }
};
</script>

<template>
  <div
    :class="['modal-backdrop', { 'modal-backdrop_visible': newsModalVisible }]"
    @click="handleNewsModalClose"
  >
    <div
      class="modal"
      @mouseenter="setMouseOverValue"
      @mouseleave="setMouseOutValue"
    >
      <header class="modal__header">
        <slot name="header">
          {{ selectedNewsItem.title }}
        </slot>

        <button class="modal__close" @click="closeNewsModal">
          <i class="bx bx-x"></i>
        </button>
      </header>

      <div class="modal__date">
        <slot>
          {{ selectedNewsItem.author }}
        </slot>
        , 
        <slot>
          {{ selectedNewsItem.date }}
        </slot>
      </div>

      <section class="modal__body">
        <slot name="body">
          {{ selectedNewsItem.paragraph }}
        </slot>
      </section>
    </div>
  </div>
</template>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  justify-content: center;
  align-items: center;
}

.modal-backdrop_visible {
  display: flex;
}

.modal {
  max-height: 90vh;
  overflow-y: auto;
  position: fixed;
  padding: 40px 50px 40px 50px;
  width: 800px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
}

.modal__date {
  margin-bottom: 20px;
  color: #767474;
  font-weight: 500;
}

.modal::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f5f5f5;
}

.modal__header,
.modal__footer {
  display: flex;
  position: relative;
}

.modal__header {
  position: relative;
  font-size: 30px;
  font-weight: 500;
  justify-content: space-between;
  margin-bottom: 10px;
}

.modal__footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal__body {
  position: relative;
  margin-bottom: 20px;
}

.modal__close {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #ffffff;
  color: #cfcfcf;
  font-size: 30px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
}


.modal__close:hover {
  background: #f5f5f5;
}
</style>
