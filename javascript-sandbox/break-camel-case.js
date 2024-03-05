function solution(string) {
  console.log(
    string
      .split(/(?=[A-Z])/)
      .map((a) => a + " a")
      .join("")
      .trim()
  );
}

solution("camelCasing");
