import { expect, test } from "@playwright/test";

test("visual regression for ErrorSummary", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-error-summary--default&viewMode=story",
  );
  await expect(page).toHaveScreenshot("error-summary.png", { fullPage: true });
});
