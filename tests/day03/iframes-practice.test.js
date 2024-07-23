import { test, expect } from "@playwright/test";

// Define the test group
test.describe("Test Group", () => {
  // create beforeEach hook that navigates to https://practice.cydeo.com/iframe
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
  });

  test("Locate the iframe by id and write sth inside", async ({ page }) => {
    const myFrame = page.frameLocator("#mce_0_ifr");
    const elementInsideTheFrame = await myFrame.locator("//body[@id='tinymce']");

 //await elementInsideTheFrame.clear();  // bu genellikle calismaz
await page.waitForTimeout(2000); 
 await elementInsideTheFrame.press("Control+A"); // "a" key is pressed
await page.waitForTimeout(2000); 
 await elementInsideTheFrame.press("Backspace"); // "Backspace" key is pressed
 await page.waitForTimeout(2000);

 await elementInsideTheFrame.fill("Hello World!");
 console.log(await elementInsideTheFrame.innerText());
 await expect(await elementInsideTheFrame.innerText()).toContain("Hello World!");
 await expect (await elementInsideTheFrame).toHaveText

  });

  test("Locate the iframe using CSS", async ({ page }) => {
    const myFrame = page.frameLocator("iframe[id='mce_0_ifr'][title='Rich Text Area']");
    const elementInsideTheFrame = await myFrame.locator("//body[@id='tinymce']");
    await expect(elementInsideTheFrame).toBeEnabled;
  });

  // Test 4
  test("Locate the iframe using Xpath", async ({ page }) => {
    const myFrame = page.frameLocator("//iframe[@title='Rich Text Area']")
    const insideTheFrame = await myFrame.locator("//body[@id='tinymce']");
    await expect(insideTheFrame).not.toBeDisabled;
    await expect(insideTheFrame).not.toBeHidden;
  });
});
