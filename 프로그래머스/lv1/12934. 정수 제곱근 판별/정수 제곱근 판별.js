function solution(n) {
  let answer = 0;
  let jaegob = Math.sqrt(n);
  // hint: 제곱근 구하는 메서드 Math.sqrt()

  //   console.log(Math.sqrt(n));
  // 1. n의 제곱근을 구해보고, 조건문으로 양수인지 판단해서
  if (jaegob % 1 === 0) {
    answer = (jaegob + 1) * (jaegob + 1);
  } else {
    answer = -1;
  }
  // truthy 제곱근+1의 제곱을 반환하고 falsy -1 반환

  return answer;
}