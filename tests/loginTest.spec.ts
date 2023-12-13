import { test, expect, type Page, chromium, Browser } from "@playwright/test";
import testData from "../test_data/data.json";
import LoginPage from "../pages/loginPage";
import Base from "../base/base";

let page: Page;
let base = new Base();
let url = testData.base_url;
let userName = testData.user_name;
let password = testData.user_password;
let loginPage: LoginPage;

test.describe("saucedemo regression", async () => {
  test.beforeEach(async ({}) => {
    page = await base.initBrowser();
    loginPage = new LoginPage(page);
  });

  test(`User is able to login `, async ({}) => {
    await test.step("1.- Navigate to https://www.saucedemo.com/", async () => {
      await page.goto(url);
      await expect(page).toHaveTitle("Swag Labs");
    });
    await test.step("2.- Fill User name field", async () => {
      await loginPage.fillUserNameField(userName);
    });
    await test.step("2.- Fill User name field", async () => {
      await loginPage.fillUserPasswordField(password);
    });
    await test.step("3.- Click login button", async () => {
      await loginPage.clickLoginButton();
    });
  });
});
