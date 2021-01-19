process.env.FUNCTIONS_EMULATOR = 'aws_lambda';
process.env.AWS_EXECUTION_ENV = 'AWS_Lambda_nodejs12.x';

const chromium = require('chrome-aws-lambda');

let autocodePuppeteer = chromium.puppeteer;
let puppeteerLaunch = chromium.puppeteer.launch.bind(autocodePuppeteer);
autocodePuppeteer.launch = async (options) => {
  options = options || {};
  if (options.hasOwnProperty('args')) {
    throw new Error('You may not specify a custom "args" option when launching Puppeteer in Autocode.')
  }
  if (options.hasOwnProperty('executablePath')) {
    throw new Error('You may not specify a custom "executablePath" option when launching Puppeteer in Autocode.')
  }
  if (options.hasOwnProperty('headless')) {
    throw new Error('You may not specify a custom "headless" option when launching Puppeteer in Autocode.')
  }
  if (!options.hasOwnProperty('defaultViewport')) {
    options.defaultViewport = chromium.defaultViewport;
  }
  if (!options.hasOwnProperty('ignoreHTTPSErrors')) {
    options.ignoreHTTPSErrors = true;
  }
  options.args = chromium.args;
  options.executablePath = await chromium.executablePath;
  options.headless = chromium.headless;
  return puppeteerLaunch(options);
};

module.exports = autocodePuppeteer;
