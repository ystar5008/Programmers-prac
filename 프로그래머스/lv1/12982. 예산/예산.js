function solution(d, budget) { //배열= d [1, 3, 2, 5, 4]   숫자열= budget 9
    let answer = 0;

    d = d.sort((a, b) => a - b)
    //d=[1, 3, 2, 5, 4] 의 총합 === 7 - budget === 9  
    for (let i = 0; i < d.length; i++) {
        //배열들의 총합이 9보다 작은 배열들 조합의 갯수
        budget = budget - d[i]
        if (budget < 0) {
            break;
        }
        answer++
    }
    return answer;
}