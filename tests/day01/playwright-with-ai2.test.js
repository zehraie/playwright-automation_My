import { test} from '@playwright/test';

test('Search for Cydeo on google', async ({ page }) => {
  
    // go to google website
    await page.goto('https://www.google.com/');

   // await page.click("button:has-text('Accept all')");
    try {
      //await page.click("button:has-text('Accept all')", { timeout: 5000 });
      //await page.click("button:has-text('Accept all')");
      await page.click('text="Accept all"');
      console.log("Cookie consent accepted successfully");
    } catch (error) {
      if (error.name === 'TimeoutError') {
        console.log("Cookie consent popup not found or already accepted");
      } else {
        console.error("An error occurred while trying to accept cookies:", error.message);
      }}


    // wait for 3 seconds
    await page.waitForTimeout(3000);

    const searchBox = await page.locator("//textarea[@id='APjFqb']");

    // fill 'Cydeo' into the search box
    await searchBox.fill('Cydeo');

    // press Enter to search
    await searchBox.press('Enter');
  
    // wait for 3 seconds
    await page.waitForTimeout(4000);

});
