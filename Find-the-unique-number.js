function findUniq(arr) {
  const a = arr.filter((a,b,c) => {
    return b !== c.indexOf(a);
  });
  var b;
  arr.map(v=> {
    if(!a.includes(v)) {
      b = v;
    }
  });
  return b;
}
