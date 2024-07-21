import { test } from '@playwright/test';

test('check  & uncheck can be used method test', async ({ page }) => {
  // go to url https://practice.cydeo.com/checkboxes
     
  await page.goto('https://practice.cydeo.com/checkboxes');

  // create a locator variable for the checkbox
   const checkbox1 = await page .locator("//input[@id='box1']");
   await page.waitForTimeout(2000); 
     await checkbox1.check();

     // create a locator variable for the checkbox
      const checkbox2 = await page.locator("//input[@id='box2']");
     await checkbox2.uncheck();
     await page.waitForTimeout(2000); 
   
});