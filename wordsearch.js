const transpose = require('./transpose');

const findWord = (array, word) => {
    const horizontalJoin = array.map(ls => ls.join(''))
    for (l of horizontalJoin) {
       if(l.includes(word)) {
           return true;
       }
    }
    return false;
}

const wordSearch = (letters, word) => { 
  const flippedArray = transpose(letters)

   return findWord(letters, word) || findWord(flippedArray, word); 
}

module.exports = wordSearch
