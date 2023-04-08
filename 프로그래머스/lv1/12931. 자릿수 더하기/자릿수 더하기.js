function solution(n) {
  let answer = 0;
  // n을 문자열로 변환
  let strn = n.toString();

  // for반복문을 통해서 각 자리마다 순회하며 sum 하기
  for (let i = 0; i < strn.length; i++) {
    answer += Number(strn[i]);
  }
  return answer;
}