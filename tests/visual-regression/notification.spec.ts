import { expect, test } from "@playwright/test";

test("visual regression for Notification", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&args=&id=components-notification--pw-all&viewMode=story",
  );
  await expect(page).toHaveScreenshot("notification.png", { fullPage: true });
});
