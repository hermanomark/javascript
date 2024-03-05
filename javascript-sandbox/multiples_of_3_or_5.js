function solution(number) {
  let sum = 0;

  if (0 > number) {
    return 0;
  }

  for (let i = 0; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(solution(9));
