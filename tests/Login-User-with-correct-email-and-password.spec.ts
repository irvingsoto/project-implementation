import { test, expect, type Page, chromium, Browser } from "@playwright/test";
import testData from "../test_data/data.json";
import HomePage from "../pages/homePage";
import Base from "../base/base";
import LoginPage from "../pages/loginPage";


let page: Page;
let base = new Base();
let url = testData.base_url;
let emailAddress = testData.email_address;
let password = testData.password;
let homePage: HomePage;
let loginPage: LoginPage;


test.describe("Testing automation exercise", async () => {
  test.beforeEach(async ({}) => {
    page = await base.initBrowser();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
  });

  test(`Test Case 2: Login User with correct email and password`, async ({}) => {
    await test.step("2.- Navigate to url 'http://automationexercise.com'", async () => {
      await page.goto(url);
      await expect(page).toHaveTitle("Automation Exercise");
    });
    await test.step("3.- Verify that home page is visible successfully", async () => {
      await homePage.verifyHomePage();
    });
    await test.step("4. Click on 'Signup / Login' button", async () => {
      await homePage.clickSignupLoginButton();
      expect(page.url(), "login page should be visible successfully").toBe(
        "https://automationexercise.com/login"
      );
    });
    await test.step("5.- Verify 'Login to your account' is visible", async () => {
      await loginPage.verifyLoginPage();
    });
    await test.step("6. Enter correct email address and password", async () => {
      try {
        await page
          .locator("form")
          .filter({ hasText: "Login" })
          .getByPlaceholder("Email Address")
          .fill(emailAddress);
        await page.getByPlaceholder("Password").fill(password);
      } catch (error) {
        throw Error("Document is not processed");
      }
    });
    await test.step("7. Click 'login' button", async () => {
      try {
        await page.getByRole("button", { name: "Login" }).click();
        await expect(
          page.getByText("Logged in as irving@wizeline.")
        ).toBeVisible();
      } catch (error) {
        throw Error("Login Error");
      }
    });
  });
});
