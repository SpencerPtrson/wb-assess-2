// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
function getNames(people) { return people.map(person => person.firstName + " " + person.lastName) }



// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring(person) {
  const {firstName, lastName} = person;
  return (firstName + " " + lastName)
}

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
function getPeopleByLocation(people, location) { return people.filter(person => person.location === location) }

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {
  phrase = phrase.split(' ');
  let newString = ''

  phrase.forEach(word => {
    switch (word) {
      case 'excuse':
        newString += 'avast';
        break;
      case 'sir':
      case 'friend':
        newString += 'matey';
        break;
      case 'is':
        newString += 'be';
        break;
      case 'restroom':
        newString += 'head';
        break;
      case 'student':
        newString += 'swabbie';
        break;
      case 'restaurant':
        newString += 'galley';
        break;
      case 'your':
        newString += 'yer';
        break;
      case 'are':
        newString += 'yer';
        break; 
      case 'my':
        newString += 'yer';
        break;
      case 'hotel':
        newString += 'yer';
        break;
      case 'hello':
        newString += 'ahoy';
        break;
      default:
        newString += word;
        break;
    }
    newString += ' ';
  })
  return newString.trim();
}

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }


function wordCount(str) {
  const wordCounts = {}; // Create an empty object
  if (!str || str.length === 0) { return wordCounts;} // validate input

  str = str.split(' '); // split the string into an array and filter by unique
  let uniqueVals = str.filter(onlyUnique); // filter automatically passes in the three arguments of value, index, and array

  uniqueVals.forEach(uniqueVal => {
    // iterate through the original string array and increment a counter for each instance
    let count = 0;
    str.forEach(value => {
      if (value === uniqueVal) count++;
    })
    wordCounts[uniqueVal] = count;  // add a key to the wordCounts object with the word and count
  })
  
  return wordCounts;
}

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
  // given a value, indexOf will find the first instance of it in the array
  // if it's not the first instance of the value, the index argument won't match the result of indexOf, and thus return false, filtering out any duplicate array elements
  // code was found on stackoverflow but I understand how it works
}

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  return bug.availability.months.includes(month);
}

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {
  let calendar = {}; // create calendar object
  
  // iterate through each month.
  for (let i = 1; i < 13; i++) {
    // iterate through bugs list and see if a bug is available during a month (use isBugAvailable method above)
    // if bug is available, add bug name to an array
    // set that array as the key value for the month
    let bugArray = [];

    for (let bug of bugs) {
      if (isBugAvailable(bug, i)) bugArray.push(bug.name);
    }
    calendar[i] = bugArray;
  }
  return calendar;
}

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
