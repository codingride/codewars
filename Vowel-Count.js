function getCount(str) {
  var vowelsCount = 0;
  str.split('').map(value => {
    if(['a','e','i','o','u'].includes(value)) {
      vowelsCount += 1;
    }
  });
  return vowelsCount;
}
