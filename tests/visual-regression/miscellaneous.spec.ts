import { expect, test } from "@playwright/test";

test("visual regression for Miscellaneous", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-typography-miscellaneous--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("miscellaneous.png", { fullPage: true });
});
