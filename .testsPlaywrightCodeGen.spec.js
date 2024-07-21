import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Java' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
});