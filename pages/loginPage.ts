import { Locator, Page, expect } from "@playwright/test";

class LoginPage {
  page: Page;
  loginLabel: Locator;

  constructor(page: Page) {
    this.loginLabel = page.getByRole("heading", {
      name: "Login to your account",
    });
  }

  async verifyLoginPage() {
    await expect(
      this.loginLabel,
      "login page should be visible successfully"
    ).toBeVisible();
  }
}
export default LoginPage;
