import { defineConfig, devices } from '@playwright/test';
import JsonUtility from './utils/json_utility.js';

const browser = JsonUtility.getConfigValue('browser');
const headless = JsonUtility.getConfigValue('headless');
const parallel = JsonUtility.getConfigValue('parallel');

const timestamp = JsonUtility.getTimeStamp();
const reportDir = `reports/${timestamp}`;

const projectsMap = {
  chrome: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless,
        viewport: { width: 1920, height: 1040 },
      },
    },
  ],

  firefox: [
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless,
      },
    },
  ],

  safari: [
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless,
      },
    },
  ],

  all: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless,
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless,
      },
    },
  ],
};

export default defineConfig({
  testDir: './tests',
  fullyParallel: parallel,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: parallel ? undefined : 1,
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', {
      outputFolder: reportDir,
      open: 'never'
    }]
  ],

  use: {
    trace: 'on-first-retry',
  },

  projects: projectsMap[browser.toLowerCase()] || projectsMap.chrome,
});
