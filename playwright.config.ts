import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    baseURL: process.env.CI ? 'https://xdesign-nicolas.github.io/playwright' : 'http://localhost:3000',
    screenshot: 'only-on-failure',
    actionTimeout: 10000,
    navigationTimeout: 10000,
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  retries: process.env.CI ? 2 : 0,
  timeout: 30000,
}

export default config
