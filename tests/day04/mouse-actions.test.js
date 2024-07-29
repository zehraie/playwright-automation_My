import { test, expect } from "@playwright/test";

//create a test group with 3 tests in it
test.describe("Test Group", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  // after reach, pause the automation for 2 seconds
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Left click test", async ({ page }) => {
    await page.click("//a[@href='/inputs']");
    await page.waitForTimeout(2000);
    expect(await page.title()).toBe("Inputs");
  });

  test("Right click test", async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.click("//a[@href='/inputs']", { button: "right" },{ clickCount: 2 });
  });

  test("Double Click Practice2", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    //button[contains(text(),'Add Element')]
    await page.dblclick("//button[text()='Add Element']");
    await expect(
      page.locator("//button[contains(text(),'Delete')]")
    ).toHaveCount(2);
    await page.waitForTimeout(2000);
  });
test(  "Mouse hover the first element", async ({ page }) => {
  await page.click("text='Hovers'"); // click on hovers link first
  await page.waitForTimeout(2000);
  await page.hover(
    "//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']"
  );
  await expect(page.locator("text='name: user1'")).toBeVisible();
  await expect( await page.locator("text='name: user1'").innerText()).toBe("name: user1");
  });
  

  test("Mouse hover second element ", async ({ page }) => {
    await page.click("text='Hovers'"); // click on hovers link first
    await page.waitForTimeout(2000);
    await page.hover(
      "(//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar'])[2]"
    );
    await expect(page.locator("text='name: user2'")).toBeVisible();
    expect(await page.locator("text='name: user2'").innerText()).toBe(
      "name: user2"
    );
  });

  test("hover each element ", async ({ page }) => {
    await page.click("text='Hovers'"); // click on hovers link first
    await page.waitForTimeout(2000);
    //! hover each eleement individually
    const elements = page.locator(
      "//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']"
    );

    // create a for of loop that can iterate each elements of the elments
    for (const each_element of await elements.all()) {
      await page.waitForTimeout(2000);
      await each_element.hover();
    }
  });


  test("hover to multiple element and assert each", async ({ page }) => {
    await page.click("text='Hovers'");

    const elements = page.locator(
      "//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']"
    );// minik kare

    const invisibleElements = page.locator("//h5"); // string text
//create a for loop that can iterate each element of the elments and invisibleElements
for(let i = 0; i < await elements.count(); i++) {
await page.waitForTimeout(2000);
await elements.nth(i).hover();
await expect(invisibleElements.nth(i)).toBeVisible();
}
    
  });

  test("Drag and Drop test", async ({ page }) => {
    await page.click("text='Drag and Drop'");

    await page.waitForTimeout(2000);
//! first solution for drag and drop action
    // await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
            // simulating mouse action: drag and drop
//! second solution for drag and drop action
    const source_element = page.locator("//div[@id='column-a']");
    const target_element = page.locator("//div[@id='column-b']");
    await source_element.dragTo(target_element);
        // drag and drop is performed on web elements directly
//! after dragging and dropping assertion the elements
    const dragableElemnts = page.locator("//div[@class='column' and @draggable='true']");
    let texts = ['B', 'A'];

    for (let i = 0; i < await dragableElemnts.count(); i++) {
      const text = await dragableElemnts.nth(i).innerText();
      console.log(text);
     expect(text).toBe(texts[i]);  // text is actual which comes from UI
    }

  });

  test("mouse wheel scrolling test", async ({ page }) => {

    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 300);

    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, -300);

  });

  test("different scrolling test", async ({ page }) => {
//?BEST SOLUTION
    await page.waitForTimeout(2000);
    const inputLink = page.locator("text='Inputs'");
    await inputLink.scrollIntoViewIfNeeded();

  });


});




