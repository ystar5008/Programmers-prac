function solution(s, n) {
  let answer = "";
  let ascii = [];

  // ascii코드로 변환 후 n을 더하여 ascii배열에 저장
  for (let i = 0; i < s.length; i++) {
    if (("a" <= s[i] && s[i] <= "z") || ("A" <= s[i] && s[i] <= "Z"))
      ascii.push(s.charCodeAt(i) + n);
    else ascii.push(s.charCodeAt(i));
  }

  for (let j = 0; j < ascii.length; j++) {
    let letter = String.fromCharCode(ascii[j]);
    if (
      ("a" <= letter && letter <= "z" && s[j] >= "a" && s[j] <= "z") ||
      ("A" <= letter && letter <= "Z" && s[j] >= "A" && s[j] <= "Z") ||
      letter === " "
    ) {
      letter = String.fromCharCode(ascii[j]);
    } else letter = String.fromCharCode(ascii[j] - 26);
    answer += letter;
  }

  return answer;
}