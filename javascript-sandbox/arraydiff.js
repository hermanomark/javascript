function arrayDiff(a, b) {
  if (b.length < 1) {
    return a;
  }
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      arr.push(a[i]);
    }
  }
  return arr;
}

arrayDiff([1, 2, 3, 4], [1, 2, 3]);
