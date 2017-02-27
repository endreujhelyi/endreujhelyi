const optimalHolidayFinder = destinations => {
  if(destinations.length === 0 || typeof destinations !== 'object') {
    return 'Error with destinations!';
  }


  let final = [];
  let cities = [];

  destinations.map(city => {
    !city[1] ? final.push(city[0]) : cities.push(city);
  })

  const finalPusher = (city, index) => {
    final.push(city);
    cities = [
      ...cities.slice(0, index),
      ...cities.slice(index + 1)
    ];
  }

  while (cities.length !== 0) {
    final.map((city, index) => {
      cities.map((cityDep, indexDep) => {
        city === cityDep[1] ? finalPusher(cityDep[0], indexDep) : null;
      })
    })
  }
  return final;
}


const holidays = [
  [ 'Los Angeles', 'Dallas' ],
  [ 'Dallas', null ],
  [ 'New York', 'Los Angeles' ],
  [ 'Phoenix', 'New York' ],
]

console.log(optimalHolidayFinder(holidays));


module.exports = optimalHolidayFinder;
