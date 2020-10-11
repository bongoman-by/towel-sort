
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = [];
    
    function isNan(value) {
        return value !== value;
      }
    
      if (matrix === null || matrix === undefined || isNan(matrix)) {
        return newArray;
      }
    
      if (matrix.constructor !== Array) {
        return newArray;
      }

    matrix.forEach((array, index) => {
  
    if ((index + 1) % 2 === 0) {
      newArray.push(array.sort((a, b) => b - a));
    } else {
        newArray.push(array);  
    }
  });
    return [].concat(...newArray);
  };
