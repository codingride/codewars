function longest(s1, s2) {
  const sortOne = s1.split('');
  const sortTwo = s2.split('');
  const sortLast = sortOne.concat(sortTwo).filter((a,b,c) => b === c.indexOf(a)).sort().join('');
  return sortLast;
}
