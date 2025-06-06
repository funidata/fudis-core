import { expect, test } from "@playwright/test";

test("visual regression for Button", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-button-wip--test&viewMode=story",
  );
  await expect(page).toHaveScreenshot("buttons.png", { fullPage: true });
});
