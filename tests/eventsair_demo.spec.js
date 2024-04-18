const { test } = require("@playwright/test");
const LoginPage = require("../pages/login.page");
const EventSelectionPage = require("../pages/eventSelection.page");
const EventDashboardPage = require("../pages/eventDashboard.page");
const EventOnlineDetailsPage = require("../pages/eventOnlineDetails.page");
const MessageApi = require("../api/message.api");

test("EventsAir Demo Test", async ({ page, request }) => {
  const loginPage = new LoginPage(page);
  const eventSelectionPage = new EventSelectionPage(page);
  const eventDashboardPage = new EventDashboardPage(page);
  const eventOnlineDetailsPage = new EventOnlineDetailsPage(page);
  const messageApi = new MessageApi(request);

  await loginPage.login();
  await eventSelectionPage.openEvent("QA Test Event");
  const eventId = await eventDashboardPage.getEventId();
  const userDetails = await messageApi.getUserDetails();
  const contact = await messageApi.createContact(eventId);
  const contactDetails = await messageApi.getContactDetails(
    eventId,
    userDetails.Id,
    contact.Id
  );
  console.log("App Pin: " + contactDetails.OnlineUser.AppPin);
  await eventDashboardPage.openOnlineDetails();
  await eventOnlineDetailsPage.addMobileApp();
});
