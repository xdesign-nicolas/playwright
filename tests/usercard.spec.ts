import { test, expect } from '@playwright/test'

test('user card visual comparison', async ({ page }) => {
  // Navigate to the page
  await page.goto('/')

  // Wait for the user card to be visible
  await page.waitForSelector('.user-card', { state: 'visible' })

  // Take a screenshot of the user card and compare
  const userCard = page.locator('.user-card')
  await expect(userCard).toHaveScreenshot('user-card.png')

  // Verify content
  await expect(userCard).toContainText('John Doe')
  await expect(userCard).toContainText('john@example.com')
})
