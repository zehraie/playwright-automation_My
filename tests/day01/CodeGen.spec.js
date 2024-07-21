import { test, expect } from '@playwright/test';

test('CodeGen test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Choose language, en').click();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
   const searchLocater = page.getByLabel('Search', { exact: true })
   await searchLocater.press('Enter');
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
});