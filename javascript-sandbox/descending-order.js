function descendingOrder(n) {
  //...
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
descendingOrder(42145);
descendingOrder(0);
