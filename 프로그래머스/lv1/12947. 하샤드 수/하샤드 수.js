// 2. 입력받은 수 % 모든자릿수 합계 === 0 ? true : false
function solution(n) {
  // n의 자릿수의 합 구하기
  let _n = n;
  let strn = String(_n);
  let sum = 0;

  for (let i = 0; i < strn.length; i++) {
    sum += Number(strn[i]);
  }

  // 자릿수의 합이 n으로 나누어떨어지면 true 반환, 아니면 false 반환
  return _n % sum === 0 ? true : false;
}