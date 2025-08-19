import { expect, test } from "@playwright/test";

test("visual regression for Horizontal Rule", async ({ page }) => {
  await page.goto(
    "/iframe.html?args=&globals=&id=components-horizontal-rule--example&viewMode=story",
  );
  await expect(page).toHaveScreenshot("hr.png", { fullPage: true });
});
