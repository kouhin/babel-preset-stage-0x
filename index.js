const modifyBabelPreset = require('modify-babel-preset');

module.exports = (function (cache) {
  return function (context, opts) {
    if (!cache) {
      cache = modifyBabelPreset('stage-0', opts || {});
    }
    return cache;
  }
}());
