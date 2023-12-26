<script setup lang="ts">
import type { CheckboxCurrency } from "@/models/currency";
import { defineProps, defineEmits } from "vue";

const { selectedCurrencies } = defineProps<{
  selectedCurrencies: CheckboxCurrency[];
}>();

const emit = defineEmits(["update:selectedCurrencies"]);

const deselectCurrency = (currency: CheckboxCurrency): void => {
  emit("update:selectedCurrencies", currency);
};
</script>

<template>
  <div class="selected-currencies">
    <div
      v-for="currency in selectedCurrencies"
      :key="currency.name"
      class="selected-currencies-item"
    >
      <div class="selected-currencies-item-name">{{ currency.name }}</div>

      <div @click="deselectCurrency(currency)" class="remove-currency"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selected-currencies {
  margin-bottom: 50px;

  &-item {
    position: relative;
    background-color: #ecedee;
    border: none;
    border-radius: 3px;

    &-name {
      text-align: center;
    }

    .remove-currency {
      position: absolute;
      top: -8px;
      right: -8px;
    }
  }
}
</style>
