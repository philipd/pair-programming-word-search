const wordSearch = function(array, targetWord) {
  let height = array.length;
  let width = array[0].length;
  let first = targetWord[0];
  // loop over rows
  for (let i = 0; i < height; i++) {
    // loop over columns
    for (let j = 0; j < width; j++) {
      // does the letter match the first letter of the word we're looking for?
      if (array[i][j] === first) {
        // if it does, check in each direction for the word we're seeking
        let result = checkAllDirs(array, i, j, targetWord);
        // if we find the word, return true
        if (result)
          return true;
      }
    }
  }
  // we've gone through the whole array and haven't found a match
  return false;
};

const checkAllDirs = function(array, i, j, targetWord) {
  // loop over all possible directions: left, right, up, down, up-left, up-right, down-left, down-right
  // each direction can be represented by a vector (x, y), for example (-1, 0) or (1, 1)
  // this will also search (0,0), but that condition is controlled for in the next function
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      // check in the current direction for a match
      let result = checkInDir(array, i, j, x, y, targetWord);
      if (result)
        return true;
    }
  }

  return false;
};

const checkInDir = function(array, i, j, x, y, targetWord) {
  // Don't check in direction (0,0), or loop will be infinite
  if (x === 0 && y === 0)
    return false;

  let letter;
  let word = '';
  let height = array.length;
  let width = array[0].length;

  do {
    letter = array[i][j];
    // Add the current letter to the word to test
    word += letter;
    // If we have a match, we're done! Otherwise, continue building the word and checking
    if (word === targetWord)
      return true;
    // increase our coordinates in the directions specified by x & y
    i += x;
    j += y;
  } while (i >= 0 && j >= 0 && i < height && j < width); // Only loop while in bounds of the array

  return false;
};

module.exports = wordSearch;
