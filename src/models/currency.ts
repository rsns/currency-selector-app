import { ref } from "vue";

export interface Currency {
  name: string;
}

export interface CheckboxCurrency extends Currency {
  selected: boolean;
}

export const currencies = ref<CheckboxCurrency[]>([
  { name: "USD", selected: false },
  { name: "EUR", selected: false },
  { name: "GBP", selected: false },
  { name: "JPY", selected: false },
  { name: "AUD", selected: false },
  { name: "CAD", selected: false },
  { name: "CHF", selected: false },
  { name: "CNY", selected: false },
  { name: "SEK", selected: false },
  { name: "NZD", selected: false },
  { name: "NOK", selected: false },
  { name: "SGD", selected: false },
  { name: "MXN", selected: false },
  { name: "INR", selected: false },
  { name: "BRL", selected: false },
]);
