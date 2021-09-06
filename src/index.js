module.exports = function solveSudoku(matrix) {
  // your solution
  const size = 9;
  const boxSize = 3;
  const find = 0;

  const findEmpty = (matrix) => {
    for (let r = 0; r < size; r++) {
      // r -> row
      for (let c = 0; c < size; c++) {
        // c -> colum
        if (matrix[r][c] === find) return [r, c];
      }
    }
    return null;
  };

  const validet = (numb, pos, matrix) => {
    const [r, c] = pos;

    for (let i = 0; i < size; i++) {
      if (matrix[i][c] === numb && i !== r) return false;
    }

    for (let i = 0; i < size; i++) {
      if (matrix[r][i] === numb && i !== c) return false;
    }

    const boxR = Math.floor(r / boxSize) * boxSize;
    const boxC = Math.floor(c / boxSize) * boxSize;
    for (let i = boxR; i < boxR + boxSize; i++) {
      for (let j = boxC; j < boxC + boxSize; j++) {
        if (matrix[i][j] === numb && i !== r && j !== c) return false;
      }
    }

    return true;
  };

  const solve = () => {
    const curPos = findEmpty(matrix);

    if (curPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const curNumb = i;
      const isValid = validet(curNumb, curPos, matrix);
      if (isValid) {
        const [r, c] = curPos;
        matrix[r][c] = curNumb;
        if (solve()) {
          return true;
        }
        matrix[r][c] = find;
      }
    }

    return false;
  };

  solve();
  return matrix;
};
