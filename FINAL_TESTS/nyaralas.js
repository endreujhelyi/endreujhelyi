const optimalHolidayFinder = destinations => {
  let final = [];

  let citiesWhatAreNotDependencies = [];
  let citiesWhatAreDependencies = [];

  // set cities what aren't dependencies
  destinations.forEach(city => {
    let isCityDep = false;
    destinations.forEach(dependency => {
      if( city[0] === dependency[1] ) {
        isCityDep = true;
      }
    });
    isCityDep ? citiesWhatAreDependencies.push(city) : null;
    !isCityDep ? citiesWhatAreNotDependencies.push(city) : isCityDep = false;
  });

  while (citiesWhatAreNotDependencies.length !== 0) {
    const random = Math.floor(Math.random() * citiesWhatAreNotDependencies.length);
    final.push(citiesWhatAreNotDependencies[random][0]);
    citiesWhatAreNotDependencies = [
      ...citiesWhatAreNotDependencies.slice(0, random),
      ...citiesWhatAreNotDependencies.slice(random + 1)
    ];

    let dependencyList = [];
    final.forEach(city => {
      citiesWhatAreDependencies.forEach(cityND => {
        city === cityND[1] ? dependencyList.push(cityND) : null;
      })
    })

    if(dependencyList.length === 0) {
      dependencyList.push(citiesWhatAreDependencies[0]);
      citiesWhatAreDependencies.slice(1);
    }

    while (dependencyList.length !== 0) {
      dependencyList.forEach((city, index) => {
        final = [city[index], ...final];
        dependencyList = [
          ...dependencyList.slice(0, index),
          ...dependencyList.slice(index + 1)
        ]
      })
    }
  }
  console.log(final);
};

const holidays = [
  [ 'New York', 'Los Angeles' ],
  [ 'Dallas', null ],
  [ 'Los Angeles', 'Dallas' ],
  [ 'Phoenix', 'Los Angeles' ]
]


optimalHolidayFinder(holidays);
