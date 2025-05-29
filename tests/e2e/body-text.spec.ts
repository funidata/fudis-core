import {expect, test} from "@playwright/test";

test('visual regression', async ({ page }) => {
  await page.goto('/iframe.html?globals=&id=components-typography-bodytext--test&viewMode=story');
  await expect(page).toHaveScreenshot("body-texts.png", { fullPage: true });
})
