function findOdd(A) {
  //happy coding!
  var unique = {};
  var result;
  let b = A.filter((value, index, self) => {
    if(self.indexOf(value) === index) {
      unique[value] = [];
      unique[value].push(value);
    } else {
      unique[value].push(value);
    }
  });
  for(let key in unique) {
    if(unique[key].length % 2 === 1) {
      result = parseInt(key);
    }
  }
  return result;
}
