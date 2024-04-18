const { expect } = require("@playwright/test");
const { extractGuidFromUrl } = require("../utils/extractGuid.utils");
const { waitForNetworkIdle } = require("../utils/wait.utils");

const baseUrl = process.env.BASEURL;

class EventDashboardPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      onlineTab: (page) => page.getByRole("tab", { name: "Online" }),
    };
  }

  async getEventId() {
    try {
      const url = this.page.url();
      const guid = extractGuidFromUrl(url);
      return guid;
    } catch (error) {
      console.log(error);
    }
  }

  async openOnlineDetails() {
    const successUrl = baseUrl + "**/online";
    try {
      await expect(this.locators.onlineTab(this.page)).toBeVisible();
      await this.locators.onlineTab(this.page).click();
      await this.page.waitForURL(successUrl);
      await waitForNetworkIdle(this.page);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EventDashboardPage;
