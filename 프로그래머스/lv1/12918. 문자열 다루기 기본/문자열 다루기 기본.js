function solution(s) {
  if ((s.length === 4 || s.length === 6) && (Number(s)) === (parseInt(s))) {

    return true
    // return Number.isInteger(Number(s)); //true
  } else {
    return false;
  }
}