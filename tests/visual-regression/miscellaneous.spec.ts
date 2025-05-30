import { expect, test } from "@playwright/test";

test("visual regression", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-typography-miscellaneous--test&viewMode=story",
  );
  await expect(page).toHaveScreenshot("miscellaneous.png", { fullPage: true });
});
