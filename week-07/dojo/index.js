'use strict';

function index(inputList, value) {
  var out = -1;
  if (typeof inputList == 'string' || typeof value == 'string') {
  	throw new Error ('Please don\'t give me string.');
  }
  for (var i=0; i<inputList.length; i++) {
  	if (inputList[i]===value) {
  		out = i;
  	};
  };
  return out;
};

module.exports = index;
