const fs = require("fs");
const path = require("path");

const indexHtml = fs.readFileSync("index.html");
const devIndex = indexHtml
  .toString()
  .replace("${BUNDLE_SERVER}", "http://localhost:9000/");
fs.writeFileSync("index.dev.html", devIndex);
