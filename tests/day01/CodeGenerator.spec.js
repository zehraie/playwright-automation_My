import { test } from '@playwright/test';

test('', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').fill('Alicannnn');
    await page.waitForTimeout(2000);

    //await page.locator('[data-test="password"]').fill('123456');
    await page.getByPlaceholder('Password').fill('123456');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Login' }).click();
});