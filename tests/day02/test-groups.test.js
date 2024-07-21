import { test } from '@playwright/test';

test.describe('Test Group', async() => {

  test('Test 1', async ({ page }) => {
    console.log(" test 1 started");
  });

  test('Test 2', async ({ page }) => {
    console.log(" test 2 started");
  });

  test('Test 3', async ({ page }) => {
    console.log(" test 3 started");
  });
});