const waitForNetworkIdle = async (page, timeout = 30000) => {
  const networkIdle = await page.waitForLoadState("networkidle", { timeout });
  return networkIdle;
};

module.exports = { waitForNetworkIdle };
