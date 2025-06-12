import { expect, test } from "@playwright/test";

test("visual regression for Button", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-button--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("button.png", { fullPage: true });
});

test("visual regression for Icon Button", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-button-icon-only--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("icon-button.png", { fullPage: true });
});
