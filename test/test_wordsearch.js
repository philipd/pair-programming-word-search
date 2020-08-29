const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');
const testArray = [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ];

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(testArray, 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(testArray, 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is short and present vertically", function() {
    const result = wordSearch(testArray, 'SEWA');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch(testArray, 'ASYHWBUOE');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally", function() {
    const result = wordSearch(testArray, 'NQVR');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically and in reverse", function() {
    const result = wordSearch(testArray, 'NQVR');

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally in reverse", function() {
    const result = wordSearch(testArray, 'AEQT');

    assert.isTrue(result);
  });
});
