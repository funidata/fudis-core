import { expect, test } from "@playwright/test";

test("visual regression for Checkbox", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-checkbox--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("checkbox.png", { fullPage: true });
});
