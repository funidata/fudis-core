import { expect, test } from "@playwright/test";

test("visual regression for Description List", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-description-list--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("description-list.png", {
    fullPage: true,
  });
});
