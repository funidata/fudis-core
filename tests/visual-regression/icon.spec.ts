import { expect, test } from "@playwright/test";

test("visual regression for Icon", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-icon-wip--all-icons&viewMode=story",
  );
  await expect(page).toHaveScreenshot("icons.png", { fullPage: true });
});

test("visual regression for Icon colors", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-icon-wip--icon-colors&viewMode=story",
  );
  await expect(page).toHaveScreenshot("icon-color.png", { fullPage: true });
});
