'use strict';

exports.stripBOM = function(str) {
  if (str[0] === '\uFEFF') {
    return str.substring(1);
  } else {
    return str;
  }
};
