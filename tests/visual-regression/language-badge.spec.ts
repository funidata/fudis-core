import { expect, test } from "@playwright/test";

test("visual regression for Language Badge", async ({ page }) => {
  await page.goto(
    "/iframe.html?id=components-language-badge--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("language-badge.png", { fullPage: true });
});
