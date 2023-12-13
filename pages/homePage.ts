import { Locator, Page, expect } from "@playwright/test";

class HomePage {
  page: Page;
  pageIcon: Locator;
  signupLoginButton: Locator;

  constructor(page: Page) {
    this.pageIcon = page.getByRole("link", { name: "Website for automation" });
    this.signupLoginButton = page.getByRole("link", { name: " Signup / Login" });
  }

  async verifyHomePage() {
    await expect(
      this.pageIcon,
      "home page should be visible successfully"
    ).toBeVisible();
  }

  async clickSignupLoginButton() {
    await this.signupLoginButton.click();

    
  }
}
export default HomePage;
