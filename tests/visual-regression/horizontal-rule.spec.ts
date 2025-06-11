import { expect, test } from "@playwright/test";

test("visual regression for Horizontal Rule", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-horizontal-rule--default&viewMode=story",
  );
  await expect(page).toHaveScreenshot("hr.png", { fullPage: true });
});
