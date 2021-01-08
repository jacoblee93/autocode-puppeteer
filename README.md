# Autocode Puppeteer

Allows use of [Puppeteer](https://pptr.dev/) in [Autocode](https://autocode.com) services. Combines the [puppeteer-core](https://www.npmjs.com/package/puppeteer-core) and [chrome-aws-lambda](https://www.npmjs.com/package/chrome-aws-lambda) packages and uses the same API and methods.

# Usage

```
const chromium = require('autocode-puppeteer');

module.exports = async (context) => {

  let result;
  let browser;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    let page = await browser.newPage();
    await page.goto(context.params.url || 'https://example.com');
    result = await page.title();
  } catch (error) {
    throw error;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return result;

};
```

For more usage information, see the examples in the [Puppeteer](https://github.com/puppeteer/puppeteer) or [chrome-aws-lambda repo README](https://github.com/alixaxel/chrome-aws-lambda).