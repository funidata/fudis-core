import { expect, test } from "@playwright/test";

test("visual regression for Loading Spinner", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-loading-spinner--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("loading-spinner.png", { fullPage: true });
});
