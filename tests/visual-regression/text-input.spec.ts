import { expect, test } from "@playwright/test";

test("visual regression for TextInput", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-text-input--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("text-input.png", { fullPage: true });
});
