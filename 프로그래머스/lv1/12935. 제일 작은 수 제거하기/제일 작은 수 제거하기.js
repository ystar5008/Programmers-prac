function solution(arr) {
  //[4,3,2,1]
  // answer에 arr를 깊은 복사
  let answer = [...arr]; // answer = [4,2,1,3] => [4, 2, 3]
  // answer에서 최소값을 찾아서 그 요소를 제거 (요소의 인덱스 찾기, 해당 인덱스의 요소 제거)
  // 최소값 구하기: Math.min()
  // 인덱스 찾기: indexOf
  // 해당 인덱스의 요소 제거: splice()  => arr.splice(index, count)

  let minimum = Math.min(...answer);
  let index = answer.indexOf(minimum);
  answer.splice(index, 1);

  // answer의 길이가 0이면 [-1]을 반환 / 아니면 answer 반환
  return answer.length === 0 ? [-1] : answer;
}