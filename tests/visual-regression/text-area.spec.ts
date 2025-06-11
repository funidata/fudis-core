import { expect, test } from "@playwright/test";

test("visual regression for TextArea", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-text-area--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("text-area.png", { fullPage: true });
});
