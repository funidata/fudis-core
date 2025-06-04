import { expect, test } from "@playwright/test";

test("visual regression for Heading", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-typography-heading--test&viewMode=story",
  );
  await expect(page).toHaveScreenshot("headings.png", { fullPage: true });
});
