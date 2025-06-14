import { expect, test } from "@playwright/test";

test("visual regression for Body Text", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-typography-bodytext--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("body-texts.png", { fullPage: true });
});
