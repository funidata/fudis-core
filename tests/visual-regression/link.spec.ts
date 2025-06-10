import { expect, test } from "@playwright/test";

test("visual regression for Link", async ({ page }) => {
  await page.goto(
    "/iframe.html?globals=&id=components-link-wip--test&viewMode=story",
  );
  await expect(page).toHaveScreenshot("links.png", { fullPage: true });
});
