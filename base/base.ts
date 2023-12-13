import { Browser, chromium } from "@playwright/test";

class Base {
  async initBrowser() {
    let browser: Browser;
    console.log("1.- Launching browser");
    browser = await chromium.launch();
    const context = await browser.newContext();
    return await context.newPage();
  }
}
export default Base;