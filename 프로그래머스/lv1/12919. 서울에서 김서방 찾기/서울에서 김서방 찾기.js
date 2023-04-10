function solution(seoul) {
  //배열 seoul을 돌면서 "kim"의 인덱스 위치찾기
  let x = seoul.indexOf("Kim");

  //x를 "김서방은 ${x}에 있다"
  return `김서방은 ${x}에 있다`;
}