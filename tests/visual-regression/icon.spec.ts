import { expect, test } from "@playwright/test";

test("visual regression for Icon", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-icon--all-icons&viewMode=story",
  );
  await expect(page).toHaveScreenshot("icons.png", { fullPage: true });
});

test("visual regression for Icon colors", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-icon--pw-icon-colors&viewMode=story",
  );
  await expect(page).toHaveScreenshot("icon-color.png", { fullPage: true });
});

test("visual regression for Icon rotate", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-icon--pw-icon-rotate&viewMode=story",
  );
  await expect(page).toHaveScreenshot("icon-rotate.png", { fullPage: true });
});
