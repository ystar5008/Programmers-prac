function solution(s) {
  //"try hello world"
  answer = "";
  let arr = s.split(" "); //[ 'try', 'hello', 'world' ]

  //짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자
  //
  for (let i = 0; i < arr.length; i++) {
    //첫번재 단어를 제외한 이후부터 스페이스바
    if (i !== 0) {
      answer += " ";
    }

    for (let j = 0; j < arr[i].length; j++) {
      //
      if (j % 2 === 0) {
        answer += arr[i][j].toUpperCase();
      } else {
        answer += arr[i][j].toLowerCase();
      }
    }
  }

  // console.log(`(${answer})`);

  //문자열의 인덱스에 따라 대문자 혹은 소문자로 판별하는식  0은 대문자 1은 소문자 짝수 홀수

  //
  return answer;
}