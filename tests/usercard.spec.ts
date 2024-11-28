import { test, expect } from '@playwright/test'

test('user card visual comparison', async ({ page }) => {
  // Navigate to the page
  await page.goto('/')

  // Wait for the user card to be visible
  await page.waitForSelector('.user-card', { state: 'visible' })

  // Get the user card locator
  const userCard = page.locator('.user-card')

  // Verify the accessibility tree structure
  await expect(userCard).toMatchAriaSnapshot(`
    - generic "user-card":
      - heading "John Doe" [level=3]
      - text "john@example.com"
      - button "Contact User"
  `)

  // Additional content verification
  await expect(userCard).toContainText('John Doe')
  await expect(userCard).toContainText('john@example.com')
})
