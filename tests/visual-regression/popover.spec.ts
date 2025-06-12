import { expect, test } from "@playwright/test";

test("visual regression for Popover", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-popover--default&viewMode=story",
  );
  await expect(page).toHaveScreenshot("popover.png", { fullPage: true });
});
