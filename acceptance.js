const { remote } = require ('webdriverio');
const assert = require ('assert');

let browser;

;(async () => {
      browser = await remote({
            capabilities: { browserName: 'chrome'}
      })

      await browser.navigateTo('http://localhost:3000/')

      const weight = await browser.$('#weight')
      await weight.setValue('80')

      const height = await browser.$('#height')
      await height.setValue('1.6')

      const submitBtn = await browser.$('#submit')
      await submitBtn.click()

      await browser.navigateTo('https://localhost:3000/process-data')

      await browser.deleteSession();

})().catch((err) => {
      console.error(err);
      return browser.deleteSession();
})