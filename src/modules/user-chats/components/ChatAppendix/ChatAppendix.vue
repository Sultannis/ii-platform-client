<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  color: {
    type: String,
    default: "#ffffff",
  },
  type: {
    type: String as PropType<"left" | "right">,
    default: "left",
  },
});
</script>

<template>
  <svg
    v-if="type === 'left'"
    width="9"
    height="20"
    viewBox="0 0 9 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_128_92)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.00017 19H10V3C9.80701 5.67294 9.12402 8.42776 7.95006 11.2654C7.04608 13.4536 5.50413 15.4866 3.32519 17.3642C3.17641 17.4923 3.07222 17.6597 3.02629 17.8444C2.98037 18.0292 2.99485 18.2227 3.06783 18.3996C3.14082 18.5764 3.2689 18.7284 3.43528 18.8356C3.60166 18.9427 3.79857 19 4.00017 19Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_128_92">
        <rect width="9" height="20" :fill="color" />
      </clipPath>
    </defs>
  </svg>
  <svg
    v-else
    width="9"
    height="20"
    viewBox="0 0 9 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_83_240)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.00012 17.0002H0.00012207V0.000244141C0.193122 2.84024 0.876122 5.76724 2.05012 8.78224C2.95412 11.1072 4.49612 13.2672 6.67512 15.2622C6.82391 15.3983 6.9281 15.5761 6.97403 15.7724C7.01996 15.9687 7.00548 16.1743 6.93249 16.3623C6.8595 16.5502 6.73141 16.7117 6.56503 16.8255C6.39864 16.9394 6.20173 17.0003 6.00012 17.0002Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_83_240">
        <rect
          width="9"
          height="20"
          :fill="color"
          transform="translate(0.00012207 0.000244141)"
        />
      </clipPath>
    </defs>
  </svg>
</template>
