<script setup lang="ts">
import { ref } from "vue";

defineProps({
  placeholder: {
    type: String,
    default: "Поиск",
  },
});

const isInputFocus = ref(false);
const toggleInputFocus = () => (isInputFocus.value = !isInputFocus.value);
</script>

<template>
  <div class="user-chats-sidebar__search">
    <span
      :class="['user-chats-sidebar__search-icon', { active: isInputFocus }]"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.84236 13.684C8.36049 13.6837 9.83487 13.1755 11.0307 12.2403L14.7906 16L16 14.7907L12.2401 11.031C13.1758 9.83508 13.6844 8.36043 13.6847 6.84199C13.6847 3.06949 10.6151 0 6.84236 0C3.06965 0 0 3.06949 0 6.84199C0 10.6145 3.06965 13.684 6.84236 13.684ZM6.84236 1.7105C9.67253 1.7105 11.9741 4.01197 11.9741 6.84199C11.9741 9.67201 9.67253 11.9735 6.84236 11.9735C4.01219 11.9735 1.71059 9.67201 1.71059 6.84199C1.71059 4.01197 4.01219 1.7105 6.84236 1.7105Z"
          fill="#BBBBBB"
        />
      </svg>
    </span>
    <input
      :placeholder="placeholder"
      @focus="toggleInputFocus"
      @focusout="toggleInputFocus"
      type="text"
      class="user-chats-sidebar__search-input"
    />
  </div>
</template>

<style scoped>
.user-chats-sidebar__search {
  width: 100%;
  position: relative;
}

.user-chats-sidebar__search-icon {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 15px;
  left: 20px;
  /* transition: border-color 0.2s cubic-bezier(0.47, 0, 0.745, 0.715); */
}

.user-chats-sidebar__search-icon.active svg path {
  fill: #6f00c7;
  /* transition: border-color 0.2s cubic-bezier(0.47, 0, 0.745, 0.715); */
}

.user-chats-sidebar__search-input {
  padding: 15px 20px 15px 53px;
  width: 100%;
  border: 1px solid #f6f6f6;
  outline: none;
  background: #f6f6f6;
  border-radius: 100px;
  font-size: 16px;
  transition: border-color 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.user-chats-sidebar__search-input:focus,
.user-chats-sidebar__search-input:active {
  border-color: #6f00c7 !important;
}

.user-chats-sidebar__search-input::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: #bbbbbb;
}
</style>
