import { expect, test } from "@playwright/test";

test("visual regression for TabNavigation", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-tab-navigation--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("tab-navigation.png", { fullPage: true });
});
