'use strict';


const test = require('tape');
const vacation = require('./new_holiday');


const destinations = [
  [ 'Los Angeles', 'Dallas'],
  [ 'Dallas', null ],
  [ 'New York', 'Los Angeles' ],
  [ 'Phoenix', 'New York' ]
];

const falsyHoliday = [
  [ 'Los Angeles', 'Dallas', 'Dömsöd'],
  [ 'Dallas', null ],
  [ 'New York', 'Los Angeles' ],
  [ 'Phoenix', 'New York' ]
];

const falsyHolidayNumberTwo = [
  [ null, 'Dallas'],
  [ 'Dallas', null ],
  [ 'New York', 'Los Angeles' ],
  [ 'Phoenix', 'New York' ]
];

const falsyHolidayNumberThree = [
  [ 'Los Angeles', 'Dallas'],
  [ 'Dallas', null ],
  [ 90210, 'Los Angeles' ],
  [ 'Phoenix', 'New York' ]
];


test('Dream Holiday', t => {
  const actual = vacation.optimalHolidayFinder(destinations);
  const expected = ['Dallas', 'Los Angeles', 'New York', 'Phoenix'];

  t.deepEqual(actual, expected);
  t.end();
})


test('I don\'t wanna go to Dömsöd', t => {
  const actual = vacation.optimalHolidayFinder(falsyHoliday);
  const expected = 'Error with destinations!';

  t.equal(actual, expected);
  t.end();
})


test('null is not a good place', t => {
  const actual = vacation.optimalHolidayFinder(falsyHolidayNumberTwo);
  const expected = 'Error with destinations!';

  t.equal(actual, expected);
  t.end();
})


test('Beverly Hills is not a city!', t => {
  const actual = vacation.optimalHolidayFinder(falsyHolidayNumberThree);
  const expected = 'Error with destinations!';

  t.equal(actual, expected);
  t.end();
})
