# Autocode Puppeteer

Allows use of [Puppeteer](https://pptr.dev/) in [Autocode](https://autocode.com) services. Combines the [puppeteer-core](https://www.npmjs.com/package/puppeteer-core) and [chrome-aws-lambda](https://www.npmjs.com/package/chrome-aws-lambda) packages.

# Usage

Certain arguments to `puppeteer.launch` are restricted. The package will throw an error if you attempt to pass `args`, `executablePath`, or `headless` as an option into the `launch` method.

```
const puppeteer = require('autocode-puppeteer');

module.exports = async (context) => {

  let result;
  let browser;

  try {
    browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(context.params.url || 'https://example.com');
    result = await page.title();
    await browser.close();
  } catch (error) {
    if (!!browser) {
      await browser.close();
    }
    throw error;
  }

  return result;

};
```

For more usage information, see the examples in the [Puppeteer repo](https://github.com/puppeteer/puppeteer).