import { test, expect } from "@playwright/test";

const appURL = "http://127.0.0.1:5173/"; // Change in case if your app is running on different URL.

test("Currency Selector Test", async ({ page }) => {
  await page.goto(appURL);

  await page.click(
    '.currency-selector-item:nth-child(3) input[type="checkbox"]'
  );

  const isSelected = await page.isChecked(
    '.currency-selector-item:nth-child(3) input[type="checkbox"]'
  );
  expect(isSelected).toBe(true);

  // Click on the selected currency to deselect it.
  await page.click(
    '.currency-selector-item:nth-child(3) input[type="checkbox"]'
  );

  const isDeselected = await page.isChecked(
    '.currency-selector-item:nth-child(3) input[type="checkbox"]'
  );

  // Verify that the third currency is deselected.
  expect(isDeselected).toBe(false);
});

test("Selected Currencies Test", async ({ page }) => {
  await page.goto(appURL);

  // Click on the first three currency checkboxes.
  for (let i = 1; i <= 3; i++) {
    await page.click(
      `.currency-selector-item:nth-child(${i}) input[type="checkbox"]`
    );
  }

  await page.waitForTimeout(500);

  const selectedCurrencies = await page.$$eval(
    ".selected-currencies-item-name",
    (elements) =>
      elements.map((el) => (el.textContent ? el.textContent.trim() : ""))
  );

  // Verify that the selected currencies are displayed in the selected currencies box.
  expect(selectedCurrencies).toEqual(["USD", "EUR", "GBP"]);

  // Verify the length of selected currencies.
  expect(selectedCurrencies.length).toEqual(3);
});
