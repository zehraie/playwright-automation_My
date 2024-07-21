//import { test} from '@playwright/test';
import { test, expect } from '@playwright/test';
//const {test} = require("@playwright/test")
test(" Log in page", async({page}) =>{

   await page.goto('https://opensource-demo.orangehrmlive.com/')
     // Wait for the page to load
  await page.waitForTimeout(3000);
   await expect(page).toHaveTitle(/OrangeHRM/);
   await expect(page).toHaveURL(/.*orangehrmlive/)
   await expect(page).toHaveURL(/.*live/)
})