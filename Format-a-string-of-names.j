function list(names) {
  const length = names.length;
  var output = '';
  names.map((v, i, s) => {
    if(i > 0 && i + 1 === length) {
      output += ' & ';
    }
    if(i > 0 && i + 1 < length) {
      output += ', ';
    }
    output += v.name;
  });
  return output;
}
