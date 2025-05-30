import { expect, test } from "@playwright/test";

test("visual regression", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-typography-header--test&viewMode=story",
  );
  await expect(page).toHaveScreenshot("headers.png", { fullPage: true });
});
