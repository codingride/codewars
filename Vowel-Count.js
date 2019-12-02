function getCount(str) {
  var count = 0;
  str.split('').map(value => ['a','e','i','o','u'].includes(value) ? count += 1 : count = count);
  return count;
}
