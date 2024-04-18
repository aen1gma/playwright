const extractGuidFromUrl = (url) => {
  const regex =
    /\/event\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\/dashboard/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  } else {
    return null;
  }
};

module.exports = { extractGuidFromUrl };
