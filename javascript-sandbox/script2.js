function solution(a) {
  let arr = a.split("");
  let up = arr.filter((a) => a === "^");
  let left = arr.filter((a) => a === "<");
  let right = arr.filter((a) => a === ">");
  let down = arr.filter((a) => a.toLowerCase() === "v");
  let newArr = [up.length, left.length, right.length, down.length];
  let largestNum = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > newArr[largestNum]) {
      largestNum = newArr[i];
    }
  }

  console.log(arr.length - largestNum);
}

// solution("^vv<v");
// solution("<<<");
// solution("^vv<v");
solution("v>>>vv");
