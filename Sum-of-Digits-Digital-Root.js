function digital_root(n) {
  let a = n.toString().split('');
  let b = a.reduce((c,d) => parseInt(c) + parseInt(d));
  let e = b.toString().split('');
  let f = e.reduce((g,h) => parseInt(g) + parseInt(h));
  return parseInt(f);
}
