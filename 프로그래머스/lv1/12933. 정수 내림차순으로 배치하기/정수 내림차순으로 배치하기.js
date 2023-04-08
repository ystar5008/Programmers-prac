function solution(n) {
  let answer = [];

  // 1. 매개변수를 문자열로 변환
  let strn = String(n);
  // 문자열을 순회하면서 배열로 넣고
  for (let i = 0; i < strn.length; i++) {
    answer.push(strn[i]);
  }
  // 배열을 내림차순으로 정렬하고

  // 배열을 문자열로 묶고 answer에 넣기
  return Number(answer.sort((a, b) => b - a).join(""));
}

