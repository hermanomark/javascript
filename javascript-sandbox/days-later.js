function solution(S, K) {
  // Implement your solution here
  arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let daysLater = arr.indexOf(S) + K;
  console.log(daysLater);
  while (daysLater > 6) {
    daysLater = daysLater - 7;
  }
  console.log(daysLater);
  let dayWeek = arr[daysLater];
  console.log(dayWeek);
}

solution("Mon", 10);
