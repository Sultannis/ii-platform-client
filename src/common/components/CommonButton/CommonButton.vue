<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  submit: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<"primary" | "secondary" | "cancel">,
    default: "primary",
  },
  loading: {
    type: Boolean,
  },
  leftIcon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :disabled="disabled || loading"
    :class="[
      'button',
      {
        button_disabled: disabled,
        'button_full-width': fullWidth,
        button_primary: type == 'primary',
        button_secondary: type == 'secondary',
        button_cancel: type == 'cancel',
        'button_secondary-loading': type == 'secondary' && loading,
        'button_cancel-loading': type == 'cancel' && loading,
        button_loading: loading,
        'button_with-left-icon': leftIcon,
      },
    ]"
    data-test="common-button"
  >
    <i
      v-if="leftIcon"
      :class="['button__left-icon', 'bx', leftIcon]"
      data-test="common-button-left-icon"
    />
    <span class="button__content" data-test="button-content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.button {
  position: relative;
  padding: 7px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 500;
  font-family: Montserrat, sans-serif;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: var(--normal-speed) ease-in-out;
}

.button:hover {
  opacity: 0.8;
}

.button_disabled {
  opacity: 0.6;
  cursor: default;
}

.button_full-width {
  width: 100%;
  height: 40px;
}

.button_primary {
  color: var(--primary-color);
}

.button_secondary {
  color: var(--primary-color);
  background-color: #6c5ce720;
}

.button_cancel {
  color: #4a5064;
  background-color: transparent;
  border: 1px solid var(--text-secondary-color);
}

.button__content {
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  line-height: 130%;
  transition: var(--normal-speed) ease-in-out;
}

.button__left-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  color: #fff;
  font-size: 14px;
  transform: translateY(-50%);
}

.button_loading:hover {
  opacity: 1;
}

.button_loading::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 8px;
  height: 8px;
  border: 2px solid transparent;
  border-top-color: var(--primary-color);
  border-radius: 50%;
  transition: var(--normal-speed) ease-in-out;
  animation: button-loading-spinner 1s ease infinite;
}

.button_loading .button__content {
  visibility: hidden;
  opacity: 0;
}

.button_loading .button__left-icon {
  visibility: hidden;
  opacity: 0;
}

.button_secondary-loading::after {
  border-top-color: var(--primary-color);
}

.button_cancel-loading::after {
  border-top-color: var(--text-secondary-color);
}

.button_with-left-icon {
  padding-left: 30px;
}

.button_secondary .button__left-icon {
  color: var(--primary-color);
}

.button_cancel .button__left-icon {
  color: #4a5064;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
