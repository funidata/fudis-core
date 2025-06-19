import { expect, test } from "@playwright/test";

test("visual regression for Badge", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-badge--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("badge.png", { fullPage: true });
});
