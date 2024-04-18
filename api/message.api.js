const { expect } = require("@playwright/test");
const { generateRandomName } = require("../utils/randomName.utils");
const {
  generateGetUserDetailsPayload,
  generateCreateContactPayload,
  generateGetContactDetailsPayload,
} = require("../utils/payloadTemplates.utils");

const username = process.env.USER_NAME;
const baseUrl = process.env.BASEURL_API;
const messageApiUrl = baseUrl + "messageapi/authorizedrequest";

class MessageApi {
  constructor(request) {
    this.request = request;
  }

  async getUserDetails() {
    try {
      const payload = generateGetUserDetailsPayload(username);
      const response = await this.request.post(messageApiUrl, {
        data: payload,
      });
      await expect(response).toBeOK();
      const json = await response.json();
      return json.User;
    } catch (error) {
      console.log(error);
    }
  }

  async createContact(eventId) {
    try {
      const firstName = generateRandomName("first");
      const lastName = generateRandomName("last");
      const email = `${firstName}-${lastName}@example.org`;
      const payload = generateCreateContactPayload(
        eventId,
        firstName,
        lastName,
        email
      );
      const response = await this.request.post(messageApiUrl, {
        data: payload,
      });
      await expect(response).toBeOK();
      const json = await response.json();
      return json.Response.Contact;
    } catch (error) {
      console.log(error);
    }
  }

  async getContactDetails(eventId, userId, contactId) {
    try {
      const payload = generateGetContactDetailsPayload(
        eventId,
        userId,
        contactId
      );
      const response = await this.request.post(messageApiUrl, {
        data: payload,
      });
      await expect(response).toBeOK();
      const json = await response.json();
      return json.Contact;
    } catch (error) {}
  }
}

module.exports = MessageApi;
