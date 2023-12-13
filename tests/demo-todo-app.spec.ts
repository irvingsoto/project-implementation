import { test, expect, type Page, chromium, Browser } from "@playwright/test";
import testData from "../test_data/data.json";


let page: Page;
let url= testData.base_url;
let userNAme= testData.user_name;

test.describe("TODO APP Tests", async () => {
  test.beforeEach(async ({}) => {
    let browser: Browser;
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test(`Create Item `, async ({}) => {
    await test.step("1.- navigate to https://demo.playwright.dev/todomvc/#/", async () => {
      await page.goto(url);
      await expect(page).toHaveTitle("React • TodoMVC");
    });
    await test.step("2.- Type 'Create project' and hit 'ENTER'", async () => {
      await page.getByPlaceholder("What needs to be done?").fill("");
      await page.keyboard.press("Enter");
      expect(await page.getByTestId("todo-title").innerText()).toBe("itemName");
    });
    await test.step("3.- Verify item is selectable", async () => {
      await page.getByLabel('Toggle Todo').click();
      await expect(page.getByRole('button', { name: 'Clear completed' })).toBeVisible();
    });
  });
});
