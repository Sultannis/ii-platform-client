<script setup lang="ts">
import {
  closeNewsModal,
  selectedNewsItem,
  newsModalVisible,
} from "@/layouts/DashbardLayout/components/news-list/composables/newsModalState";
</script>

<template>
  <div
    :class="['modal-backdrop', { 'modal-backdrop_visible': newsModalVisible }]"
  >
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          {{ selectedNewsItem.title }}
        </slot>
        <button type="button" class="btn-close" @click="closeNewsModal">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          {{ selectedNewsItem.paragraph }}
        </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer">
          {{ selectedNewsItem.date }}
        </slot>
        <button type="button" class="btn-green">Close Modal</button>
      </footer>
    </div>
  </div>
</template>

<style>
.modal-backdrop {
  position: fixed;
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
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
