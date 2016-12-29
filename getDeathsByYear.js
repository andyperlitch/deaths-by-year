const path = require('path');
const utils = require('./utils');
const yearRange =  [1900, 2016];

// interface IPerson {
//     yearOfDeath: number;
//     popularityWeight: number;
// }

let yearMap = {};
for (let i = yearRange[0]; i <= yearRange[1]; i++) {
    yearMap[i] = { personCount: 0, popularityWeight: 0 };
}

utils.createPersonStream(yearRange)
     .pipe(utils.createFilterStream(person/*: IPerson*/ => {
         let yearMapItem = yearMap[person.yearOfDeath];
         yearMapItem.personCount++;
         yearMapItem.popularityWeight += person.popularityWeight;
     }))
     