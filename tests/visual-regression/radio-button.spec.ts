import { expect, test } from "@playwright/test";

test("visual regression for RadioButton", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-radio-button--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("radio-button.png", { fullPage: true });
});
