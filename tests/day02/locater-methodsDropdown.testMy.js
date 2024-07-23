import { test } from '@playwright/test';

test('check & uncheck method test: can be used for radio buttons & checkboxes', async ({ page }) => {
  // go to url https://practice.cydeo.com/checkboxes
     
  await page.goto('https://practice.cydeo.com/checkboxes');

  // create a locator variable for the checkbox
   const checkbox1 = await page .locator("//input[@id='box1']");
   await page.waitForTimeout(2000); 
     await checkbox1.check();
     await page.waitForTimeout(7000); 
     // create a locator variable for the checkbox
      const checkbox2 = await page.locator("//input[@id='box2']");
     await checkbox2.uncheck();
     await page.waitForTimeout(2000); 
   
});

test('selectOptions method test: can be used for dropdowns', async ({ page }) => {
    
  // go to https://practice.cydeo.com/dropdown
      
  await page.goto('https://practice.cydeo.com/dropdown');

  const simpleDropDown = await page.locator("//select[@id='dropdown']");

  await page.waitForTimeout(3000);

  // select by value: 3 sekilde value, label, index
   //await simpleDropDown.selectOption({value:"1"});
  // await simpleDropDown.selectOption("1");
   //await page.waitForTimeout(4000);

  // select by index:
  await simpleDropDown.selectOption({index:2});

  // select by visible text:
  //await simpleDropDown.selectOption( {label: 'Option 1'} );



  await page.waitForTimeout(3000);

  // to get all options from drop down
  const options = await simpleDropDown.evaluate((select) => {
      return Array.from(select.options).map(option => ({
        text: option.text,
        value: option.value
      }));
  
    });
    
   // console.log(`Result: ${options.toLocaleString()}`);
   console.log(options);

});