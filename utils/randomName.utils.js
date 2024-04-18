const generateRandomName = (prefix) => {
  const timestamp = Date.now();
  return prefix + "_" + timestamp;
};

module.exports = { generateRandomName };
