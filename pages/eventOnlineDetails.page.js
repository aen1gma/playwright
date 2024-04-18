const { expect } = require("@playwright/test");
const { generateRandomName } = require("../utils/randomName.utils");
const { waitForNetworkIdle } = require("../utils/wait.utils");

const baseUrl = process.env.BASEURL;

class EventOnlineDetailsPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      mobileAppsTable: (page) => page.getByText("Mobile AppsNew"),
      mobileAppsNewButton: (page) =>
        this.locators
          .mobileAppsTable(page)
          .getByRole("button", { name: "New" }),
      newMobileAppModal: (page) => page.getByText("New Mobile AppCancelCreate"),
      createButton: (page) =>
        this.locators
          .newMobileAppModal(page)
          .getByRole("button", { name: "Create" }),
      typeField: (page) =>
        page.locator("#MobileAppSetupConfiguration_new_mobileAppType"),
      typeFieldDropdown: (page) => 
        page.locator('#MobileAppSetupConfiguration_new_mobileAppType button'),
      typeFieldOption: (page, value) =>
        page.getByRole("option", { name: value }),
      applicationNameField: (page) => page.getByLabel("Application Name"),
      eventAppCodeField: (page) => page.getByLabel("Event App Code"),
    };
  }

  async addMobileApp() {
    const successUrl = baseUrl + "**/builder";
    try {
      const typeValue = "Attendee App";
      const applicationName = generateRandomName("appName");
      const eventAppCode = generateRandomName("appCode");
      await expect(this.locators.mobileAppsTable(this.page)).toBeVisible();
      // New Button
      await expect(this.locators.mobileAppsNewButton(this.page)).toBeVisible();
      await this.locators.mobileAppsNewButton(this.page).click();
      // Modal
      await expect(this.locators.newMobileAppModal(this.page)).toBeVisible();
      // Type Field
      await expect(this.locators.typeField(this.page)).toBeVisible();
      //await this.locators.typeFieldDropdown(this.page).click();
      //await this.locators.typeFieldOption(this.page, typeValue).click();
      //const actualTypeValue = await this.locators
      //  .typeField(this.page)
      //  .textContent();
      //expect(actualTypeValue).toEqual(typeValue);
      // Application Name Field
      await expect(this.locators.applicationNameField(this.page)).toBeVisible();
      await this.locators.applicationNameField(this.page).click();
      await this.locators.applicationNameField(this.page).fill(applicationName);
      await expect(this.locators.applicationNameField(this.page)).toHaveValue(
        applicationName
      );
      // Event App Code Field
      await expect(this.locators.eventAppCodeField(this.page)).toBeVisible();
      await this.locators.eventAppCodeField(this.page).click();
      await this.locators.eventAppCodeField(this.page).fill(eventAppCode);
      await expect(this.locators.eventAppCodeField(this.page)).toHaveValue(
        eventAppCode
      );
      // Create
      await expect(this.locators.createButton(this.page)).toBeVisible();
      await this.locators.createButton(this.page).click();
      await this.page.waitForURL(successUrl);
      await waitForNetworkIdle(this.page);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EventOnlineDetailsPage;
