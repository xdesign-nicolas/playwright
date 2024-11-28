import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    baseURL: process.env.CI ? 'https://xdesign-nicolas.github.io/playwright' : 'http://localhost:3000',
    screenshot: 'only-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 15000,
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
  retries: process.env.CI ? 2 : 0,
  timeout: 60000,
  reporter: process.env.CI ? [['html'], ['list']] : 'list',
}

export default config
