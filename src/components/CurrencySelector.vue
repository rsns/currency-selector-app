<script setup lang="ts">
import { ref } from "vue";
import SelectedCurrencies from "./SelectedCurrencies.vue";
import CustomCheckbox from "./CustomCheckbox.vue";
import type { CheckboxCurrency } from "@/models/currency";

const { currencies } = defineProps<{
  currencies: CheckboxCurrency[];
}>();

const selectedCurrencies = ref<CheckboxCurrency[]>([]);

const toggleCurrency = (currency: CheckboxCurrency): void => {
  currency.selected = !currency.selected;

  selectedCurrencies.value = currency.selected
    ? [...selectedCurrencies.value, currency]
    : selectedCurrencies.value.filter((c) => c.name !== currency.name);
};
</script>

<template>
  <div class="currency-selector">
    <SelectedCurrencies
      :selectedCurrencies="selectedCurrencies"
      @update:selectedCurrencies="toggleCurrency"
    />
    <div class="currency-selector-box">
      <div
        v-for="currency in currencies"
        :key="currency.name"
        class="currency-selector-item"
        :class="{ selected: currency.selected }"
        @click="toggleCurrency(currency)"
      >
        <CustomCheckbox :currency="currency"></CustomCheckbox>

        {{ currency.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.currency-selector {
  max-width: 360px;
  padding: 20px;
  border: 1px solid #ccc;

  &-item {
    display: flex;
    align-items: center;
    background-color: #eee;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }

    &.selected {
      background-color: #fff;
      &:hover {
        background-color: unset;
      }
    }
  }
}
</style>
