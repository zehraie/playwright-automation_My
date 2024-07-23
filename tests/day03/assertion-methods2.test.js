import { test, expect } from '@playwright/test';

// Define the test group
test.describe('Test Group', () => {
    let elements;
    let count;
 test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/")
    elements = page.locator("//ul[@class='list-group']/li/a");
    count = await elements.count();
 });

 test("Verify that there are 50 elements under the url tag", async ({page}) => {
    expect(count).toEqual(50);
  });

  // Define another test case within the group
  test("Verify all 50 elements under the url tag are visible", async ({page}) => {
    for (let i = 0; i < count; i++) {
        // get each element
        const element = elements.nth(i);
        // check if the element is visible
        const isVisible = await element.isVisible();
        expect(isVisible).toBeTruthy();
        //await expect(element).toBeVisible();
        // display the visible text of each element
        console.log(await element.innerText());
        
    }
  });

  
  test("Verify all 50 elements under the url tag are enabled", async ({page}) => {
    for (let i = 0; i < count; i++) {
      const element = elements.nth(i);
      expect(await element.isEnabled()).toBeTruthy();
      //await expect(element).toBeEnabled();
      // print thr href of each element
      console.log(await element.getAttribute("href"));
    }
  });
});