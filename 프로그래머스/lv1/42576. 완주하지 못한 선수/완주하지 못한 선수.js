function solution(participant, completion) {
  answer = "";
  // 1. object 생성
  let obj = {};
  // 2. participant의 이름들을 key, 그 이름이 나오는 횟수를 value로 object에 추가
  participant.forEach((ele) => {
    if (obj[ele] === undefined) obj[ele] = 1;
    else obj[ele] += 1;
  });
  // { mislav: 2, stanko: 1, ana: 1 }
  // 3. object에서 completion의 요소에 해당하는 key값의 value를 하나 감소
  completion.forEach((e) => {
    obj[e]--;
  });

  for (let i in obj) {
    if (obj[i] === 1) {
      answer += i;
    }
  }
  return answer;
}