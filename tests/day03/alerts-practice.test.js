import { test, expect } from '@playwright/test';

// Define the test group
test.describe('Test Group', () => {
//create beforeEach hook and novigate to https://practice.cydeo.com/javascript_alerts
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  // Define a test case within the group
  test('Handling JS Alerts', async ({ page }) => {
    let alertMessage;  // pop icindeki mesaj
    page.on('dialog', async dialog => {
        console.log('Dialog messageL ${dialog.message()})');
        alertMessage = dialog.message();
        await page.waitForTimeout(2000);  // wait for 1 second before accepting the alert
        dialog.accept();
    });
    const clickForJsAlert = page.locator("//button[@onclick='jsAlert()']");
    await clickForJsAlert.click();
    await expect(page.locator("text ='You successfully clicked an alert'")).toBeVisible();
    await expect(alertMessage).toBe("I am a JS Alert")
  });
  
  test('Handling JS Confirm', async ({ page }) => {
    let confirmMessage;  // pop icindeki mesaj
    page.on( 'dialog', async dialog => {
        confimMessage = dialog.message();
        await page.waitForTimeout(2000);  // wait for 1 second before accepting the alert
        dialog.dismiss();
    });
    const clickForJsConfirm = page.locator("//button[contains(@class, 'btn-primary') and @onclick='jsConfirm()']");
    await clickForJsConfirm.click();

    await expect(page.locator("text='You clicked: Cancel'")).toBeVisible();
    expect(confrimMessage).toBe("I am a JS Confirm");
  });

  test("Handling JS Promopt", async ({ page }) => {
   let promptMessage;  // pop icindeki mesaj
    page.on('dialog', async dialog => {
        promptMessage = dialog.message();
        await page.waitForTimeout(2000);  // wait for 1 second before accepting the alert
        await dialog.accept('Change me!');
    });
    const clickForJsPrompt = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJsPrompt.click();

    await expect(page.locator("text='You entered: Change me!'")).toBeVisible();
  });
});