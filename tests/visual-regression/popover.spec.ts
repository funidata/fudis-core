import { expect, test } from "@playwright/test";

test("visual regression for Popover", async ({ page }) => {
  await page.goto(
    "/iframe.html?args=&globals=&id=components-popover--example&viewMode=story",
  );
  await expect(page).toHaveScreenshot("popover.png", { fullPage: true });
});
