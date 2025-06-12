import { expect, test } from "@playwright/test";

test("visual regression for Alert", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-alert--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("alert.png", { fullPage: true });
});
