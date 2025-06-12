import { expect, test } from "@playwright/test";

test("visual regression for CheckboxGroup", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-checkbox-group--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("checkbox-group.png", { fullPage: true });
});
