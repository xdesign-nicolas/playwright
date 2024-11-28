import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    baseURL: process.env.CI ? 'https://xdesign-nicolas.github.io/playwright' : 'http://localhost:3000',
    screenshot: 'only-on-failure',
    actionTimeout: 10000,
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
}

export default config
