import { test, expect } from '@playwright/test'

test('counter functionality', async ({ page }) => {
  // Navigate to the page
  await page.goto('/')

  // Wait for the counter component to be visible
  await page.waitForSelector('[data-testid="counter"]', { state: 'visible', timeout: 10000 })

  // Check initial state
  await expect(page.locator('[data-testid="count-display"]')).toContainText('Current count: 0')

  // Click increment button and verify
  await page.click('[data-testid="increment-button"]')
  await expect(page.locator('[data-testid="count-display"]')).toContainText('Current count: 1')

  // Click decrement button and verify
  await page.click('[data-testid="decrement-button"]')
  await expect(page.locator('[data-testid="count-display"]')).toContainText('Current count: 0')
})
