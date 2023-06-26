import { executablePath } from 'puppeteer';

export const config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless'],
      binary: executablePath(),
    },
  },

};