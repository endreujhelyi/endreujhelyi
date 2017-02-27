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

// L ← Empty list that will contain the sorted elements
// S ← Set of all nodes with no incoming edges
// while S is non-empty do
//     remove a node n from S
//     add n to tail of L
//     for each node m with an edge e from n to m do
//         remove edge e from the graph
//         if m has no other incoming edges then
//             insert m into S
// if graph has edges then
//     return error (graph has at least one cycle)
// else
//     return L (a topologically sorted order)



const holidays = [
  [ 'New York', 'Los Angeles' ],
  [ 'Dallas', null ],
  [ 'Los Angeles', 'Dallas' ],
  [ 'Phoenix', 'Los Angeles' ]
]



// const holidays = [
//   { city: 'New York', dependency: 'Los Angeles' },
//   { city: 'Dallas', dependency: null },
//   { city: 'Los Angeles', dependency: 'Dallas' },
//   { city: 'Phoenix', dependency: 'Los Angeles' }
// ]

optimalHolidayFinder(holidays);




// const finalLoader = () => {
//   citiesWithDependency.forEach((city, index) => {
//     final.forEach(finalCity => {
//       finalCity.city === city.dependency ? () => {
//         final.push(city);
//         citiesWithDependency = [
//           ...citiesWithDependency.slice(0, index),
//           ...citiesWithDependency.slice(index + 1)
//         ];
//       } : console.log('.');;
//     })
//   })
//
// };
