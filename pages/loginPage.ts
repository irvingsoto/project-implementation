import { Locator, Page, expect } from "@playwright/test";

class LoginPage {
  page: Page;
  userNameField: Locator;
  userPasswordField: Locator;
  loginButton: Locator;
  shoppingCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = this.page.locator('[data-test="username"]');
    this.userPasswordField = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
    this.shoppingCartIcon = this.page.locator("#shopping_cart_container");
  }

  async fillUserNameField(userName: string) {
    try {
      await this.userNameField.fill(userName);
    } catch (error) {
      throw new error("Not possible to fill user name");
    }
  }

  async fillUserPasswordField(password: string) {
    try {
      await this.userPasswordField.fill(password);
    } catch (error) {
      throw new error("Not possible to fill user password");
    }
  }
  async clickLoginButton() {
    await this.loginButton.click();
    await expect(this.shoppingCartIcon).toBeVisible();
  }
}
export default LoginPage;
