import { expect, test } from "@playwright/test";

test("visual regression for Table", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-table--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("table.png", { fullPage: true });
});
