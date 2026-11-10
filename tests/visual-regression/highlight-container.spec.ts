import { expect, test } from "@playwright/test";

test("visual regression for Highlight Container", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-highlight-container--example&viewMode=story",
  );
  await expect(page).toHaveScreenshot("highlight-container.png", { fullPage: true });
});
