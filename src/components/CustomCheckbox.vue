<script setup lang="ts">
import type { CheckboxCurrency } from "@/models/currency";

const { currency } = defineProps<{
  currency: CheckboxCurrency;
}>();
</script>

<template>
  <div class="currency-selector-checkbox-container">
    <input
      type="checkbox"
      :value="currency.name"
      :checked="currency.selected"
    />

    <span class="checkmark"></span>
  </div>
</template>

<style lang="scss" scoped>
.currency-selector {
  max-width: 360px;
  padding: 20px;

  border: 1px solid #ccc;

  &-checkbox-container {
    cursor: pointer;

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;

      &:checked ~ .checkmark {
        background-color: #fff;

        &:after {
          color: #ff0000;
          content: "X";
        }
      }
    }

    .checkmark {
      height: 16px;
      width: 16px;
      margin-right: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid #ccc;
      border-radius: 4px;

      background-color: #eee;
    }
  }
}
</style>
