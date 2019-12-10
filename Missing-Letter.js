function findMissingLetter(array) {

  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upper = [];
  var lower = [];
  letters.map((value, index) => {
     if(array.includes(value)) {
       lower.push(index)
     }
     if(array.includes(value.toUpperCase())) {
       upper.push(index)
     }
  });
  let begin = upper.length > 0 ? upper[0] : lower[0];
  let ending = upper.length > 0 ? upper[upper.length - 1] : lower[lower.length - 1];
  var counter = 0;
  var missing;
  for(let i = begin; i < ending; i++) {
    if(upper.length > 0 && upper[counter] !== i) {
      missing = letters[i].toUpperCase();
      break;
    }
    if(lower.length > 0 && lower[counter] !== i) {
      missing = letters[i];
      break;
    }
    counter += 1;
  }
  return missing;
}
