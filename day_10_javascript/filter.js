const isEven = function (x) { return x % 2 === 0; };

const filter = function(array, func) {
  let result = [];
  // for(let value of array) 
  for(let i = 0; i < array.length; i++) {
    if(func(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

filter([1, 2, 3, 4], isEven);
