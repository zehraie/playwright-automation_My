import { test, expect } from "@playwright/test";

test.describe("Assertion in UI testing", async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Verify the page title is 'Practice'", async ({page}) => {
    const pageTitle = await page.title();
    await page.waitForTimeout(3000);
     expect(pageTitle).toEqual("Practice");
   // await expect(page).toHaveTitle("Practice");
});

  test("Verify the text 'Automation' is included the header element", async ({page}) => {
  const headerElement = await page.locator("h1");
  //const headerText = await headerElement.innerText();
  const headerText = await headerElement.textContent();
  console.log(headerText);
  expect(headerText).toContain("Automation");
  });

  test("Verify the element 'A/B Testing' is clickable", async ({page}) => {
    const abTestingLink = page.locator('a[href="/abtest"]');

    expect(await abTestingLink.isEnabled()).toBeTruthy(); 
    await expect(abTestingLink).toBeEnabled();
  });

  test("Verify the element 'Autocomplete' href is '/autocomplete' ", async ({page}) => {
    const autocompleteLink = page.locator('a[href="/autocomplete"]');
    const href = await autocompleteLink.getAttribute('href');
    expect(href).toBe("/autocomplete");
    await expect(autocompleteLink).toHaveAttribute("href", "/autocomplete");
  });

});


// come back at 7:45pm
