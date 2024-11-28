import { test, expect } from '@playwright/test'

test('counter functionality', async ({ page }) => {
  // Navigate to the page
  await page.goto('/')

  // Check initial state
  await expect(page.locator('.counter p')).toContainText('Current count: 0')

  // Click increment button and verify
  await page.click('text=Increment')
  await expect(page.locator('.counter p')).toContainText('Current count: 1')

  // Click decrement button and verify
  await page.click('text=Decrement')
  await expect(page.locator('.counter p')).toContainText('Current count: 0')
})
