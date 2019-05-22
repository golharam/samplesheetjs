module.exports = function samplesheetjs(string) {
  if (typeof string !== "string") throw new TypeError("samplesheetjs wants a string!");
  return string.replace(/\s/g, "");
};
