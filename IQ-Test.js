function iqTest(numbers){
  var result;
  var odd = [];
  var even = [];
  numbers.split(' ').map((value, index) => {
    value % 2 === 1 ? odd.push(index + 1) : even.push(index + 1);
  });
  odd.length === 1 ? result = odd[0] : result = even[0];
  return result;
}
