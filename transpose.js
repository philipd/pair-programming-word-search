const transpose = function(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!newArr[j]) {
        newArr[j] = [];
      }
      newArr[j][i] = matrix[i][j];
    }
  }
  return newArr;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

module.exports = transpose;