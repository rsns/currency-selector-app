<script setup lang="ts">
import CurrencySelector from "./components/CurrencySelector.vue";
import { currencies } from "./models/currency";
</script>

<template>
  <CurrencySelector :currencies="currencies" />
</template>

<style scoped></style>
