import { test, expect } from '@playwright/test'

test('user card visual comparison', async ({ page }) => {
  // Navigate to the page
  await page.goto('/')

  // Wait for the user card to be visible
  await page.waitForSelector('[data-testid="user-card"]', { state: 'visible', timeout: 10000 })

  // Take a screenshot of the user card and compare
  const userCard = page.locator('[data-testid="user-card"]')

  // Wait for all content to be stable
  await expect(userCard).toContainText('John Doe')
  await expect(userCard).toContainText('john@example.com')

  // Take the screenshot
  await expect(userCard).toHaveScreenshot('user-card.png', {
    timeout: 10000,
    animations: 'disabled',
  })
})
