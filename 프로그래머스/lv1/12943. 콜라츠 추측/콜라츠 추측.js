function solution(n) {
  let count = 0;
  let _n = n;

  while (count < 500 && _n !== 1) {
    _n = _n % 2 === 0 ? _n / 2 : _n * 3 + 1;
    count++;
  }

  return count < 500 ? count : -1;
}