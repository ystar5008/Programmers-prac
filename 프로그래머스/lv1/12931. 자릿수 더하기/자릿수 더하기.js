function solution(n) {
  let answer = String(n) // ["1", "2", "3"]
    .split("")
    .map((e) => Number(e))
    .reduce((a, b) => a + b, 0); // 0+"1" => "01"
  return answer;
}