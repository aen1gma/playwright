const { expect } = require("@playwright/test");
const { waitForNetworkIdle } = require("../utils/wait.utils");

const baseUrl = process.env.BASEURL;

class EventSelectionPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      eventsTable: (page) => page.getByText("EventsBy Name NameStart"),
      eventRecord: (page, eventName) =>
        page.getByRole("gridcell", { name: eventName }),
    };
  }

  async openEvent(eventName) {
    const successUrl = baseUrl + "**/dashboard";
    try {
      await expect(this.locators.eventsTable(this.page)).toBeVisible();
      await expect(
        this.locators.eventRecord(this.page, eventName)
      ).toBeVisible();
      await this.locators.eventRecord(this.page, eventName).click();
      await this.page.waitForURL(successUrl);
      await waitForNetworkIdle(this.page);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EventSelectionPage;
