function solution(a, b) {
    let answer = 0

    if (b < a) {
        for (let i = b; i <= a; i++) {
            answer += i
        }
    } else {
        for (let i = a; i <= b; i++) {
            answer += i
            if (b < a) {

            }
        }


    }
    return answer;
}
