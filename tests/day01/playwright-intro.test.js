import test from "@playwright/test";

test('search for Playwright on google', async ({ page }) => {
/*
open browser https://www.google.com
locate search box
type "playwright" in search box
press Enter
close browser
*/
 await page.goto('https://www.google.com/');

 await page.waitForTimeout(3000);
const searchInput = await page.locator("//textarea[@class='gLFyf']");
//await searchInput.type('playwright');

await searchInput.fill('playwright Automation Testing');
await page.waitForTimeout(3000); // Wait for search results to load
await searchInput.press('Enter');

await page.waitForTimeout(3000);
 





}); // test script

/* <textarea class="gLFyf" aria-controls="Alh6id" 
aria-owns="Alh6id" autofocus="" title="Ara" value=""
 jsaction="paste:puy29d;" aria-label="Ara" 
 aria-autocomplete="both" aria-expanded="false" 
 aria-haspopup="false" autocapitalize="off" 
 autocomplete="off" autocorrect="off" id="APjFqb" 
 maxlength="2048" name="q" role="combobox" rows="1" 
 spellcheck="false" data-ved="0ahUKEwiHp4HByLCHAxUWXUEAHXPkB1oQ39UDCAw"></textarea> 
 //textarea[@class='gLFyf']

 */







