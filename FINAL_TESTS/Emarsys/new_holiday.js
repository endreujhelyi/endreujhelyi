const optimalHolidayFinder = destinations => {
  if(destinations.length === 0 || typeof destinations !== 'object') {
    return 'Error with destinations!';
  }

  if(destinations) {
    let error = false;
    destinations.forEach(city => {
      city.length > 2 || typeof city[0] !== 'string' || !city[0] ? error = true : null;
    })
    if(error) {
      return 'Error with destinations!';
    }
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
    final.map(city => {
      cities.map((cityDep, indexDep) => {
        city === cityDep[1] ? finalPusher(cityDep[0], indexDep) : null;
      })
    })
  }
  return final;
}


const holidays = [
  [ 'Los Angeles', 'Dallas'],
  [ 'Dallas', null ],
  [ 'New York', 'Los Angeles' ],
  [ 'Phoenix', 'New York' ]
]


module.exports = { optimalHolidayFinder };
