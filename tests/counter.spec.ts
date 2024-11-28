import { test, expect } from '@playwright/test'

test('counter functionality', async ({ page }) => {
  // Navigate to the page
  await page.goto('/')

  // Wait for the counter component to be visible
  await page.waitForSelector('.counter', { state: 'visible' })

  // Check initial state
  await expect(page.locator('.counter p')).toContainText('Current count: 0')

  // Click increment button and verify
  await page.click('text=Increment')
  await expect(page.locator('.counter p')).toContainText('Current count: 1')

  // Click decrement button and verify
  await page.click('text=Decrement')
  await expect(page.locator('.counter p')).toContainText('Current count: 0')
})
