const { expect } = require("@playwright/test");
const { waitForNetworkIdle } = require("../utils/wait.utils");

const baseUrl = process.env.BASEURL;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

class LoginPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      usernameInput: (page) =>
        page
          .locator("div")
          .filter({ hasText: /^Username$/ })
          .getByRole("textbox"),
      passwordInput: (page) =>
        page
          .locator("div")
          .filter({ hasText: /^Password$/ })
          .getByRole("textbox"),
      loginButton: (page) => page.getByRole("button", { name: "Login" }),
    };
  }

  async login() {
    const successUrl = baseUrl + "event/selection";
    try {
      await this.page.goto("/login");
      await waitForNetworkIdle(this.page);
      // Username Input
      await expect(this.locators.usernameInput(this.page)).toBeVisible();
      await this.locators.usernameInput(this.page).click();
      await this.locators.usernameInput(this.page).fill(username);
      // Password Input
      await expect(this.locators.passwordInput(this.page)).toBeVisible();
      await this.locators.passwordInput(this.page).click();
      await this.locators.passwordInput(this.page).fill(password);
      // Login Button
      await expect(this.locators.loginButton(this.page)).toBeVisible();
      await this.locators.loginButton(this.page).waitFor({ enabled: true });
      await this.locators.loginButton(this.page).click();
      // Login Successful
      await this.page.waitForURL(successUrl, { timeout: 15000 });
      await waitForNetworkIdle(this.page);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LoginPage;
