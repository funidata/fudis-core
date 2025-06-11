import { expect, test } from "@playwright/test";

test("visual regression for RadioButtonGroup", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-radio-button-group--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("radio-button-group.png", { fullPage: true });
});
