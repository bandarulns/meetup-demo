const fs = require('fs');
const path = require('path');

module.exports = () => {

  const filePath = path.resolve(__dirname, './config_data/config.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(fileData);
  const featureFlags = jsonData.flags;
  for (const key in featureFlags) {
    if (!key)
        continue;

    const childFilePath = path.resolve(__dirname, `./config_data/${key?.toLowerCase()}_config.json`);
    const childFileData = fs.readFileSync(childFilePath, 'utf-8');
    jsonData.values[key] = JSON.parse(childFileData);
  }

  return JSON.stringify(jsonData);
};