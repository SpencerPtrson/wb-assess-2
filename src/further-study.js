// Unit 2 Assessment: further-study.js

// Return a sequence of words arranged according to the rules below.
//
// The sequence starts with the first word in the given array. The next word
// will start with the last letter of the preceding word. For example, these
// are all valid sequences of words:
//
//   king, goblin, nose, eat
//   cute, etcetera, antsy, yak, karat
//
// Sometimes, you'll get a word where there are mutliple candidates for the
// next word. For example, if the words are:
//
//   noon, naan, nun
//
// Then the first word in the sequence is 'noon'.
//
//   noon
//
// And the word after that should be the *first* word that starts with 'n'. So,
// even though both 'naan' and 'nun' start with 'n', the next word should be
// 'naan' because 'naan' appears before 'nun'. The final sequence of words will
// be:
//
//   noon, naan, nun
//
// The sequence will continue in this fashion until it runs out of words or it
// can't find words that'll fit the pattern.
//
// Ex.:
//   buildWordChain(['zoo', 'sour', 'racket', 'octos']);
//   => ['zoo', 'octos', 'sour', 'racket']
function buildWordChain(words) {
    const resultArr = [words[0]];
    const wordNum = words.length;
    words.splice(0, 1);
  
  
    // go until every word has been put into the result arr
    while (resultArr.length < wordNum) {
      let foundWord = true;
      
      // iterate through the remaining words and check if the first letter is the same as the last letter as the last element in the resultArr
      for (let i = 0; i < words.length; i++) {
        let workingWord = resultArr[resultArr.length - 1].split(''); // get array of workingWord to check last character
        let wordToCheck = words[i].split(''); // get array of wordToCheck to check first character
        
        if (workingWord && workingWord.length && wordToCheck && wordToCheck.length && workingWord[workingWord.length - 1] === wordToCheck[0]) {
          resultArr.push(words[i]);
          words.splice(i, 1);
          foundWord = true;
          break;
        }
        else foundWord = false;
      }
  
      if(!foundWord) return resultArr;
      
    }
    console.log(resultArr);
    return resultArr;
  }

  
export { buildWordChain };
