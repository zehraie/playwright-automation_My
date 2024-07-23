import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config("./.env");

test('Library Login', async ({ page }) => {
  // Your test steps go here
    await page.goto(process.env.LIBRARY_URL);

   const usernameInput = await page.locator("//input[@id='inputEmail']");

   const passwordInput = await page.locator("//input[@id='inputPassword']");

   // create a local variable name signInBtutton and use this xpath //button[@type='submit']
     const signInButton = await page.locator("//button[@type='submit']");

     await page.waitForTimeout(2000); // wait for 2 seconds before clicking on the
     //enter username and password

   await usernameInput.fill(process.env.LIBRARY_STUDENT_USERNAME);
   await page.waitForTimeout(2000); 
   await passwordInput.fill(process.env.LIBRARY_STUDENT_PASSWORD);
   await page.waitForTimeout(2000); 

   await signInButton.click();
   await page.waitForTimeout(2000); 
   await expect(page).toHaveTitle(/Library/);
   await expect(page).toHaveURL("https://library2.cydeo.com/#books")
   await expect(page).toHaveURL(/.*books/)
   await page.locator("//span[@class='navbar-toggler-icon']").isDisabled;
   await page.locator("//span[@class='navbar-toggler-icon']").isEnabled;
   const bookManagementTitle = await page.locator('text="Book Management"');
   await expect(bookManagementTitle).toBeVisible();
   const pageTitle = await bookManagementTitle.textContent();
   expect(pageTitle).toBe("Book Management");
});







// LIBRARY_URL = "https://library2.cydeo.com/"

// LIBRARY_STUDENT_USERNAME="student5@library"
// LIBRARY_STUDENT_PASSWORD="libraryUser"

// LIBRARY_ADMIN_USERNAME="librarian10@library"
// LIBRARY_ADMIN_PASSWORD="libraryUser"