import { expect, test } from "@playwright/test";

test("visual regression for Breadcrumbs", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-breadcrumbs--example&viewMode=story",
  );
  await expect(page).toHaveScreenshot("breadcrumbs.png", { fullPage: true });
});
