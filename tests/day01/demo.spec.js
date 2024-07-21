import { test, expect, Page } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});
test.describe('Demo Test', () => {
    test('Verify Login Error Message', async ({ page }) => {
        await page.waitForSelector('#user-name',{state:'visible'});
        await page.locator('[data-test="username"]').type('example1@example.com');

        await page.waitForTimeout(5000);
        await page.locator('[data-test="password"]').type('examplepassword');
        await page.locator('[data-test="login-button"]').click();
        const errorMessage = await page.locator('[data-test="error"]').textContent();
        console.log("Login Error Message: "+errorMessage);
        page.pause();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
        await page.waitForTimeout(2000)
        //page.close();
    });
});