import { Browser, Page, chromium } from "playwright-core";

class Base {
  async initBrowser() {
    let browser: Browser;
    browser = await chromium.launch();
    const context = await browser.newContext();
    return await context.newPage();
  }
}
export default Base;
