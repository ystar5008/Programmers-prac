function solution(n, m) {
    let answer = [];
    let arrn1 = []
    let arrn2 = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            arrn1.push(i)
        }
    }
    for (let j = 0; j <= m; j++) {
        if (m % j === 0) {
            arrn2.push(j)
        }
    }
    let a = arrn1.filter(e => arrn2.includes(e))
    answer.push((Math.max(...a)))

    //n와 m의 n*m=최대공약수*최소공배수 입니다
    answer.push(n * m / Math.max(...a))


    //n*m 을 곱한 값
    return answer;
}