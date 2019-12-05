function toWeirdCase(string) {
  var after = '';
  var odd = 0;
  string.split('').map((v,i) => {
    v === ' ' ? odd = 1 : odd = odd;
    odd % 2 === 0 ? after += v.toUpperCase() : after += v.toLowerCase();
    odd += 1;
  });
  return after;
}
