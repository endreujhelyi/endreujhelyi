'use strict';

var test = require('tape');
var index = require('./index');

test('valid params', function(t) {
  t.equal(index([1,2,3], 3), 2);
  t.end();
});

test('invalid param', function(t) {
	t.throws(function() {
		index('asdf', 'a')
	}, 'Please don\'t give me string.')
  	t.end();
})
