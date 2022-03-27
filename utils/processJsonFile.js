const fs = require("fs");
const path = require("path");

const processJsonFile = (filePath) => {
  const file = fs.readFileSync(path.join(process.cwd(), "data", filePath));
  const data = JSON.parse(file);
  return data;
};

module.exports = processJsonFile;
